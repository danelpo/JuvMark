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
            selectOldTaskListState: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/data/curriculum/' + this.state.curriculumName).then(Response => {return Response.json()}).then(message => {
            this.setState({curriculumObject: message})});
        fetch('http://localhost:8080/api/data/curriculum/' + this.state.curriculumName + '/tasks').then(Response => {return Response.json()}).then(message => {
            this.setState({curriculumTaskList: message})});
    }

    selectOldTaskListFunction() {
        this.setState({selectOldTaskListState: true});
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
            for(let i in this.state.curriculumTaskListTasks) {
                myRawRows.push([i, this.state.curriculumTaskListTasks[i]]);
            }
            let myLessRawButStillRawRows = myRawRows[0][1];
            let myLessRawRows = [];
            for(let i in myLessRawButStillRawRows) {
                myLessRawRows.push(myLessRawButStillRawRows[i]);
            }
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
        return myString;
    }

    cancelTaskView = () => {
        this.setState({openOption: null});
    }

    bringToConfirmHomeScreen = () => {
        let newJsonObject = this.props.classDetails;
        newJsonObject.taskList = this.state.openOption.label;
        this.props.changeToConfirm(newJsonObject);
    }

    render() {
        let optionMenu, taskTable, optionButtons = null;
        if(this.state.selectOldTaskListState) {
            optionMenu = (
                <Select className="loadCurriculumDropDownMenu" value={this.state.openOption} onChange={this.handleChange} options={this.options()}/>
            );
            
            if(this.state.openOption) {
                const columns = [{key: 'taskNumber', name: 'Task Number'},{key: 'expectations', name: 'Expectations in Curriculum'},{key: 'taskDesc', name: 'Task Description'}];
                let rows = this.getRowsForTask();
                taskTable = (
                    <div className="selectOldTasksDiv">
                        <DataGrid columns={columns} rows={rows}/>
                    </div>
                );

                optionButtons = (
                    <div className="taskOptionsButtonDiv">
                            <button className="taskOptionButton" id="saveTaskButton" onClick={() => {this.bringToConfirmHomeScreen(this)}}>Save</button>
                            <button className="taskOptionButton" id="cancelTaskButton" onClick={() => {this.cancelTaskView(this)}}>Cancel</button>
                    </div>
                );

                document.getElementById("selectOldTaskButton").disabled = true;
                document.getElementById("createNewTaskButton").disabled = true;
            } else {
                document.getElementById("selectOldTaskButton").disabled = false;
                document.getElementById("createNewTaskButton").disabled = false;
            }
        }
        return(
            <div className="taskListMainScreen">
                        <h2>Please select an option for your tasks</h2>
                        <h4>Tasks include all tests, quizzes, asignments and evaluations</h4>
                        <br/>
                        <div className="taskOptionsButtonDiv">
                            <button className="taskOptionButton" id="selectOldTaskButton" onClick={() => {this.selectOldTaskListFunction(this)}}>Select Old Task List</button>
                            <button className="taskOptionButton" id="createNewTaskButton">Create New Task List</button>
                        </div>
                        <br/>
                        {optionMenu}
                        <br/>
                        {taskTable}
                        <br/>
                        {optionButtons}
                    </div>
        )
    }
}