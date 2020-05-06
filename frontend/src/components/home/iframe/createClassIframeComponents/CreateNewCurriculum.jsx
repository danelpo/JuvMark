import React from 'react';
import '../iframeStyles.css';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import DataGrid from 'react-data-grid';
import CreateNewTaskList from './CreateNewTaskList.jsx';
import axios from 'axios';
import validateNameInArray from '../../../functions/iframeFunctions';

export default class CreateNewCurriculum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allCurriculumsArray: null,
            curriculumName: null,
            columns: [{key: 'expectation', name: 'Expectation'},{key: 'desc', name: 'Description'}],
            rows: [],
            displayTaskList: false,
            classDetails: props.classDetails,
        }
    }
    
    courseCodeFromClassCode = classCode => {
        if (!classCode) return;
        for(let i = 0; i < classCode.length; i++) {
            if(classCode.substring(i, i+1) === '-') {
                return classCode.substring(0, i);
            }
        }
        return classCode;
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/data/curriculum').then(Response => {return Response.json()}).then(message => {
            this.setState({allCurriculumsArray: message})});
    }

    closePopup = () => {
        if(document.getElementById("createCurriculumPopupBackground")) {
            document.getElementById("createCurriculumPopupBackground").remove();
            document.getElementById("createCurriculumPopupContent").remove();
        }
    }

    getRowInfo() {
        let backgroundDiv = document.createElement("div");
        document.body.appendChild(backgroundDiv);
        backgroundDiv.className = "popupBackgroundDiv";
        backgroundDiv.id = "createCurriculumPopupBackground";
        backgroundDiv.addEventListener('click', this.closePopup);
        
        let popupDiv = document.createElement("div");
        document.body.appendChild(popupDiv);
        popupDiv.className = "popupItself";
        popupDiv.id = "createCurriculumPopupContent"
        
        let popupDivHeader = document.createElement("h1");
        popupDiv.appendChild(popupDivHeader);
        popupDivHeader.innerHTML = "Please enter the information below";

        let expectationText = document.createElement("h3");
        popupDiv.appendChild(expectationText);
        expectationText.innerHTML = "Please enter the expectation:";

        let expectationTextbox = document.createElement("input");
        expectationTextbox.type = "text"
        popupDiv.appendChild(expectationTextbox);
        expectationTextbox.placeholder = "A1";
        expectationTextbox.className = "textBox";
        expectationTextbox.id = "expectationTextboxInCreateCurriculum";
        expectationTextbox.style.height = "7%";

        let descriptionText = document.createElement("h3");
        popupDiv.appendChild(descriptionText);
        descriptionText.innerHTML = "Please enter the description:";

        let descriptionTextbox = document.createElement("textarea");
        popupDiv.appendChild(descriptionTextbox);
        descriptionTextbox.placeholder = "description";
        descriptionTextbox.className = "textBox";
        descriptionTextbox.id = "descriptionTextboxInCreateCurriculum";
        descriptionTextbox.style.height = "20%";
        descriptionTextbox.style.width = "65%";
        descriptionTextbox.style.font = "normal 2vmin ariel,serif";
        descriptionTextbox.style.resize = "none";
        descriptionTextbox.onkeypress = e => {
            if(e.keyCode === 13)
                e.preventDefault();
        }//cancels Enter from registering

        let Break1 = document.createElement("br");
        popupDiv.appendChild(Break1);
        let Break2 = document.createElement("br");
        popupDiv.appendChild(Break2);
        let Break3 = document.createElement("br");
        popupDiv.appendChild(Break3);
        let Break4 = document.createElement("br");
        popupDiv.appendChild(Break4);

        let saveButton = document.createElement("button");
        popupDiv.appendChild(saveButton);
        saveButton.className="textBox";
        saveButton.style.height = "7%";
        saveButton.style.width = "35%";
        saveButton.innerHTML = "save";
        saveButton.style.display = "inline";
        saveButton.id = "saveUserInputInCreateCurriculumButton";
        saveButton.addEventListener('click', this.getUserCurriculumInfo)
    }

    getUserCurriculumInfo = () => {
        let expectationBox = document.getElementById("expectationTextboxInCreateCurriculum");
        let descriptionBox = document.getElementById("descriptionTextboxInCreateCurriculum");
        if(expectationBox.value && descriptionBox.value) {
            let newInput = this.state.rows;
            newInput.unshift({expectation: expectationBox.value, desc: descriptionBox.value});
            this.setState({rows: newInput});
            this.closePopup();
        }
    }

    saveCurriculum = () => {
        if(this.state.rows.length > 1) {
            let index = 0;
            axios.post(`http://localhost:8080/api/data/curriculum/newName/${this.state.curriculumName}`).then(() => {
                function request(myArray) {
                    const curriculum = myArray[index].expectation + "_" + myArray[index].desc;
                    let number = 0;
                    if(index === 0) number = 1;
                    else if(index === myArray.length-1) number = 2;

                    return axios.post(`http://localhost:8080/api/data/curriculum/addCurriculum/${curriculum}/${number}`).then(() => {
                        index++;
                        if(index === myArray.length) {
                            return 'done';
                        }
                        return request(myArray);
                    });
                }
                request(this.state.rows);
            });
            let updateJSON = this.state.classDetails;
            updateJSON.curriculum = this.state.curriculumName;
            this.setState({displayTaskList: true, classDetails: updateJSON});
        }
    }

    render() {
        if(!this.state.curriculumName && this.state.allCurriculumsArray) {
            let courseCode = this.courseCodeFromClassCode(this.props.classDetails.code);
            let pureCurriculumName = courseCode + "_" + this.props.classDetails.start + "-" + this.props.classDetails.end;
            let curriculumName = validateNameInArray(pureCurriculumName, this.state.allCurriculumsArray);
            this.setState({curriculumName}); 
        }

        let myNumber;
        if(document.body.getElementsByClassName("iframeContent")) {
            myNumber = document.body.getElementsByClassName("iframeContent")[0].getBoundingClientRect().height * 0.75;
        }
        if(!this.state.displayTaskList) {
            return(
                <div className="iframeContent">
                    <h2>Creating Curriculum: {this.state.curriculumName}</h2>
                    <SaveIcon className="saveButtonForCreateCurriculum" style={{fontSize: 40}} onClick={() => {this.saveCurriculum(this)}}/>
                    <DataGrid columns={this.state.columns} rows={this.state.rows} height={myNumber}/>
                    <AddIcon style={{fontSize: 80}} onClick={() => {this.getRowInfo(this)}}/>
                </div>
            );
        }
        return(
            <CreateNewTaskList classDetails={this.state.classDetails}/>
        );
    }
}