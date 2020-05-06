import React from 'react';
import DataGrid from 'react-data-grid';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import validateNameInArray from '../../../functions/iframeFunctions';
import axios from 'axios';

export default class CreateNewTaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            columns: [{key: 'name', name: 'Task Name'},{key: 'expectations', name: 'Expectations'},{key: 'desc', name: 'Description'}],
            taskListName: null,
            dirtyArray: null,
            classDetails: null,
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/data/curriculum/${this.props.classDetails.curriculum}/tasks`).then(Response => {return Response.json()}).then(message => {
            this.setState({dirtyArray: message})});
    }
    closePopup = () => {
        if(document.getElementById("createTaskListPopupBackground")) {
            document.getElementById("createTaskListPopupBackground").remove();
            document.getElementById("createTaskListPopupContent").remove();
        }
    }

    getTaskInfo = () => {
        let backgroundDiv = document.createElement("div");
        document.body.appendChild(backgroundDiv);
        backgroundDiv.className = "popupBackgroundDiv";
        backgroundDiv.id = "createTaskListPopupBackground";
        backgroundDiv.addEventListener('click', this.closePopup);

        let popupDiv = document.createElement("div");
        document.body.appendChild(popupDiv);
        popupDiv.className = "popupItself";
        popupDiv.id = "createTaskListPopupContent";

        let popupDivHeader = document.createElement("h1");
        popupDiv.appendChild(popupDivHeader);
        popupDivHeader.innerHTML = "Please enter the information below";

        let bigDiv = document.createElement("div");
        popupDiv.appendChild(bigDiv);
        bigDiv.id = "bigDiv";

        let taskNameDiv = document.createElement("div");
        bigDiv.appendChild(taskNameDiv);
        taskNameDiv.id = "taskNameDivInCreateTaskList";
        taskNameDiv.className = "frameDivsInCreateTaskListPopup";

        let taskExpcDiv = document.createElement("div");
        bigDiv.appendChild(taskExpcDiv);
        taskExpcDiv.id = "taskExpectationDivInCreateTaskList";
        taskExpcDiv.className = "frameDivsInCreateTaskListPopup";

        let taskNameText = document.createElement("h3");
        taskNameDiv.appendChild(taskNameText);
        taskNameText.innerHTML = "Please enter the task name:";

        let taskNameTextbox = document.createElement("input");
        taskNameTextbox.type = "text"
        taskNameDiv.appendChild(taskNameTextbox);
        taskNameTextbox.placeholder = "T1/Q1";
        taskNameTextbox.className = "createTaskListPopupTextBox";
        taskNameTextbox.id = "taskNameTextBoxInCreateTaskList";

        let expectationText = document.createElement("h3");
        taskExpcDiv.appendChild(expectationText);
        expectationText.innerHTML = "Please enter the expectations:";

        let expectationTextbox = document.createElement("input");
        expectationTextbox.type = "text"
        taskExpcDiv.appendChild(expectationTextbox);
        expectationTextbox.placeholder = "A1, A2, A3";
        expectationTextbox.className = "createTaskListPopupTextBox";
        expectationTextbox.id = "taskExpectationsTextBoxInCreateTaskList";

        let descriptionText = document.createElement("h3");
        popupDiv.appendChild(descriptionText);
        descriptionText.innerHTML = "Please enter the description:";

        let descriptionTextbox = document.createElement("textarea");
        popupDiv.appendChild(descriptionTextbox);
        descriptionTextbox.placeholder = "description";
        descriptionTextbox.className = "textBox";
        descriptionTextbox.id = "descriptionTextboxInCreateTaskList";
        descriptionTextbox.onkeypress = e => {
            if(e.keyCode === 13)
                e.preventDefault();
        }//cancels Enter from registering

        let saveButton = document.createElement("button");
        popupDiv.appendChild(saveButton);
        saveButton.className="textBox";
        saveButton.innerHTML = "save";
        saveButton.id = "saveUserInputInCreateTaskListButton";
        saveButton.addEventListener('click', this.getUserTaskInfo)
    }

    getUserTaskInfo = () => {
        let expectationsBox = document.getElementById("taskExpectationsTextBoxInCreateTaskList");
        let nameBox = document.getElementById("taskNameTextBoxInCreateTaskList");
        let descriptionBox = document.getElementById("descriptionTextboxInCreateTaskList");
        if(expectationsBox.value && descriptionBox.value && nameBox.value) {
            let newInput = this.state.rows;
            newInput.unshift({name: nameBox.value, expectations: expectationsBox.value, desc: descriptionBox.value});
            this.setState({rows: newInput});
            this.closePopup();
        }
    }

    StringArrayToString = stringArray => {
        let spacelessStringArray = stringArray.replace(/\s/g, "");
        spacelessStringArray = spacelessStringArray.replace(/,/g, "-");
        return spacelessStringArray;
    }

    saveTaskList = () => {
        if(this.state.rows.length > 1 && this.props.classDetails) {
            let index = 0;
            axios.post(`http://localhost:8080/api/data/curriculum/newName/${this.state.taskListName}`).then(() => {
                function request(myArray, cur, foo) {
                    const task = myArray[index].name + "_" + foo(myArray[index].expectations) + "_" + myArray[index].desc;

                    let number = 0;
                    if(index === 0) number = 1;
                    else if(index === myArray.length-1) number = 2;

                    return axios.post(`http://localhost:8080/api/data/curriculum/addTask/${cur}/${task}/${number}`).then(() => {
                        index++;
                        if(index === myArray.length) {
                            return 'done';
                        }
                        return request(myArray, cur, foo);
                    });
                }
                request(this.state.rows, this.props.classDetails.curriculum, this.StringArrayToString);
            });
            let updateJSON = this.props.classDetails;
            updateJSON.taskList = this.state.taskListName;
            this.setState({classDetails: updateJSON});
        }
    }

    purifyCurriculumName(dirtyCurriculumName) {
        let cleanObject = null;
        let underscoreIndex = 0;
        for (let j = 0; j < dirtyCurriculumName.length; j++) {
            if(dirtyCurriculumName.substring(j, j+1) === "_") {
                underscoreIndex === 1 ? cleanObject = dirtyCurriculumName.substring(0, j) :  underscoreIndex++;
            }
        }
        return cleanObject;
    }
    
    render() {
        if(this.state.dirtyArray && !this.state.taskListName) {
            const taskListName = validateNameInArray(this.purifyCurriculumName(this.props.classDetails.curriculum), this.state.dirtyArray);
            this.setState({taskListName});
        }

        let myNumber;
        if(document.body.getElementsByClassName("iframeContent")) {
            myNumber = document.body.getElementsByClassName("iframeContent")[0].getBoundingClientRect().height * 0.75;
        }

        return(
            <div className="iframeContent">
                <h2>Creating Task List: {this.state.taskListName}</h2>
                <h3>With curriculum: {this.props.classDetails.curriculum}</h3>
                <SaveIcon className="saveButtonForCreateCurriculum" style={{fontSize: 40}} onClick={() => {this.saveTaskList(this)}}/>
                <DataGrid columns={this.state.columns} rows={this.state.rows} height={myNumber}/>
                <AddIcon style={{fontSize: 80}} onClick={() => {this.getTaskInfo(this)}}/>
            </div>
        )
    }
}