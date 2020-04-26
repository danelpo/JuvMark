import React from 'react';
import DataGrid from 'react-data-grid';
import Select from 'react-select';
import '../iframeStyles.css';

export default class TaskListOptionScreen extends React.Component {
    //props loadOld if false: creating new, hide select old task list
    //props currentCurriculum: the curriculum that we are selecting the tasks for.

    constructor(props) {
        super(props);
        this.state = {
            forceToCreate: false,
            curriculumName: this.props.currentCurriculum,
            curriculumObject: null,
            curriculumTaskList: [],
            openOption: null,
            curriculumTaskListTasks: null,
            selectOldTaskList: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/data/curriculum/' + this.state.curriculumName).then(Response => {return Response.json()}).then(message => {
            this.setState({curriculumObject: message})});
        fetch('http://localhost:8080/api/data/curriculum/' + this.state.curriculumName + '/tasks').then(Response => {return Response.json()}).then(message => {
            this.setState({curriculumTaskList: message})});
    }

    selectOldTaskList() {
        this.setState({selectOldTaskList: true});
    }

    handleChange = selectedOption => {
        this.setState({openOption: selectedOption});
        fetch('http://localhost:8080/api/data/curriculum/' + this.state.curriculumName + '/tasks/' + selectedOption.label).then(Respone => {return Respone.json()}).then(message => {
            this.setState({curriculumTaskListTasks: message})});

    }

    options = () => {
        let optionArray = [];
        this.state.curriculumTaskList.map(taskName => (optionArray.push({value: taskName, label: taskName})));
        return optionArray;
    }

    getRowsForTask = () => {
        let myRows = [];
        if(this.state.curriculumTaskListTasks) {
            let myRawRows = [];
            for(var i in this.state.curriculumTaskListTasks)
                myRawRows.push([i, this.state.curriculumTaskListTasks[i]]);;
            let myLessRawButStillRawRows = myRawRows[0][1];
            let myLessRawRows = [];
            for(var i in myLessRawButStillRawRows)
                myLessRawRows.push(myLessRawButStillRawRows[i]);
            myLessRawRows.map(task => (myRows.push({taskNumber: task.TaskNumber, expectations: this.arrayToString(task.Curriculums), taskDesc: task.Description})))
        }
        return myRows;
    }
    
    arrayToString = array => {
        let myString = "";
        for(let i in array) {
            myString = myString + array[i];
            if(parseInt(i) + 1 !== array.length) {
                myString = myString + ", "; 
            }
        }
        console.log(myString);
        return myString;
    }

    render() {
        let optionMenu, taskTable = null;
        if(this.state.selectOldTaskList) {
            optionMenu = (
                <Select className="loadCurriculumDropDownMenu" value={this.state.openOption} onChange={this.handleChange} options={this.options()}/>
            );
            
            if(this.state.openOption) {
                const columns = [{key: 'taskNumber', name: 'Task Number'},{key: 'expectations', name: 'Expectations in Curriculum'},{key: 'taskDesc', name: 'Task Description'}];
                //let rows = [{taskNumber: "T1", taskDesc: "Task Description"}];
                let rows = this.getRowsForTask();
                taskTable = (
                    <div className="selectOldTasksDiv">
                        <DataGrid columns={columns} rows={rows}/>
                    </div>
                );
                }
        }
        return(
            <div className="taskListMainScreen">
                        <h2>Please select an option for your tasks</h2>
                        <h4>Tasks include all tests, quizzes, asignments and evaluations</h4>
                        <br/>
                        <div className="taskOptionsButtonDiv">
                            <button className="taskOptionButton" id="selectOldTaskButton" onClick={() => {this.selectOldTaskList(this)}}>Select Old Task List</button>
                            <button className="taskOptionButton" id="createNewTaskButton">Create New Task List</button>
                        </div>
                        <br/>
                        {optionMenu}
                        <br/>
                        {taskTable}
                    </div>
        )
    }
}