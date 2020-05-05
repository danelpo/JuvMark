import React from 'react';
import DataGrid from 'react-data-grid';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';

export default class CreateNewTaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [{name: "Q1", expectations: "A1, A2", desc: "lab safety quiz"}, {name: "T1", expectations: "A1, A2, A2.2, A3, A4", desc: "working in a lab test"}],
            columns: [{key: 'name', name: 'Task Name'},{key: 'expectations', name: 'Expectations'},{key: 'desc', name: 'Description'}],
            taskListName: null,
            newCurriculum: this.props.curriculum ? true : false,
        }
        console.log("new curriculum: " + this.state.newCurriculum);
    }

    componentDidMount() {
        const taskListName = this.props.curriculumName + "_1";
        this.setState({taskListName});
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

    saveTaskList = () => {
        alert("SAVED");
    }
    
    render() {
        let myNumber;
        if(document.body.getElementsByClassName("iframeContent")) {
            myNumber = document.body.getElementsByClassName("iframeContent")[0].getBoundingClientRect().height * 0.75;
        }

        return(
            <div className="iframeContent">
                <h2>Creating Task List: {this.state.taskListName}</h2>
                <h3>With curriculum: {this.props.curriculumName}</h3>
                <SaveIcon className="saveButtonForCreateCurriculum" style={{fontSize: 40}} onClick={() => {this.saveTaskList(this)}}/>
                <DataGrid columns={this.state.columns} rows={this.state.rows} height={myNumber}/>
                <AddIcon style={{fontSize: 80}} onClick={() => {this.getTaskInfo(this)}}/>
            </div>
        )
    }
}