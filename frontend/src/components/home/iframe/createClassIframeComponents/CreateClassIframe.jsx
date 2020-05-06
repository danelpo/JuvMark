import React from 'react';
import '../iframeStyles.css';
import CreateNewCurriculum from './CreateNewCurriculum.jsx';
import LoadOldCurriculum from './LoadOldCurriculum.jsx';
import axios from 'axios';

export default class CreateClassIframe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classCode: props.classCode,
            startYear: props.startYear,
            endYear: props.endYear,
            iframeWindow: 0,
            confirmScreen: false,
            classDetails: null,
        }
    }

    apdateHomeValues() {
        let classCodeValue = document.getElementById("classCodeBox").value;
        if(classCodeValue === "")
            this.props.changeProps("classCode", null);
        else
            this.props.changeProps("classCode", classCodeValue);

        let startYearValue = document.getElementById("startYearBox").value;
        if(startYearValue === "")
            this.props.changeProps("startYear", null);
        else
            this.props.changeProps("startYear", startYearValue);

        let endYearValue = document.getElementById("endYearBox").value;
        if(endYearValue === "")
            this.props.changeProps("endYear", null);
        else
            this.props.changeProps("endYear", endYearValue);
    }

    componentDidMount() {
        this.apdateHomeValues();
    }

    render() {
        /*
        let classCodeInitValue = "ICS4U-01";
        let startYearInitValue = "2019";
        let endYearInitValue = "2020";
        */
        let classCodeInitValue, startYearInitValue, endYearInitValue = null;

        if(this.state.classCode) {
            classCodeInitValue = this.state.classCode;
            this.setState({classCode: null});
        }
        
        if(this.state.startYear) {
            startYearInitValue = this.state.startYear;
            this.setState({startYear: null});
        }

        if(this.state.endYear) {
            endYearInitValue = this.state.endYear;
            this.setState({endYear: null});
        }

        let bottomHalf = null;
        let curriculumText = (<h4>Please select a curriculum option:</h4>);
        if(!this.state.confirmScreen) {
            bottomHalf = (
                    <div className = "buttonDiv" id="curriculumButtonDiv">
                        <button className="textBox curriculumButton" id="CreateCurriculumButton"
                        onClick={() => this.CreateCurriculum()}>Create Curriculum</button>
                        
                        <button className="textBox curriculumButton" id="OldCurriculumButton"
                        onClick={() => this.LoadOldCurriculum()}>Use Old Curriculum</button>
                    </div>
            );
        } else {
            curriculumText = (
                <div>
                    <h2>Curriculum Selected: {this.state.classDetails.curriculum}</h2>
                    <h2>Task List Selected: {this.state.classDetails.taskList}</h2>
                </div>
            );
            bottomHalf = (
                <div className = "buttonDiv" id="curriculumButtonDiv">
                    <br/>
                    <button className="textBox curriculumButton" id="saveClassSettings" onClick={() => {this.saveConfirm(this)}}>Save</button>
                    <button className="textBox curriculumButton" id="cancelClassSettings" onClick={() => {this.cancelConfirm(this)}}>Cancel</button>
                </div>
        );
        }

        let createClassHomeIframe = (
            <div className="iframeContent">
                <h1>Create Class</h1>
                <h4>Please enter class code in the following format:</h4>
                <div className="textBoxDiv" id="classCodeDiv">
                    <input type="text" className="textBox" id="classCodeBox" placeholder="ICS4U-01" value={classCodeInitValue}
                    onChange={() => this.apdateHomeValues()}/>
                </div>
                <br/>
                <h4>Please enter date of semester in the designated textboxes:</h4>
                <div className="textBoxDiv" id="yearDateDiv">
                    <input type="text" className="textBox yearDateTextBox" id="startYearBox" placeholder="Start Year (2019)"
                    value={startYearInitValue} onChange={() => this.apdateHomeValues()} />
                    
                    <input type="text" className="textBox yearDateTextBox" id="endYearBox" placeholder="End Year (2020)"
                    value={endYearInitValue} onChange={() => this.apdateHomeValues()} />
                </div>
                <br/>
                <br/>
                {curriculumText}
                {bottomHalf}
            </div>
        );

        const classDetails = {code: this.props.classCode, start: this.props.startYear, end: this.props.endYear};

        let createCurriculumIframe = (
                <CreateNewCurriculum classCode={this.props.classCode? this.props.classCode : "Class Code Not Given"}
                changeToConfirm={this.changeToConfirm.bind(this)} classDetails={classDetails}/>
        );

        let loadOldCurriculumIframe = (
            <div className="iframeContent">
                <LoadOldCurriculum classCode={this.props.classCode? this.props.classCode : "Class Code Not Given"}
                changeToConfirm={this.changeToConfirm.bind(this)} classDetails={classDetails}/>
            </div>
        );
        let iframeCurrentWindow = createClassHomeIframe;
        if(this.state.iframeWindow === 1)
            iframeCurrentWindow = createCurriculumIframe;
        else if(this.state.iframeWindow === 2)
            iframeCurrentWindow = loadOldCurriculumIframe;

        return(
            iframeCurrentWindow 
        )
    }
    /*
    state.iframeWindow
    0: main window
    1: create curriculum
    2: old curriculum
    */
    CreateCurriculum() {
        if(this.whatsNotFilled().errors.length !== 0) {
            this.highlightNotFilled(this.whatsNotFilled());
        }
        else
            this.setState({iframeWindow: 1});
    }

    highlightNotFilled(bigArray) {
        let errors = bigArray.errors;
        let filled = bigArray.filled;

        for(let i in errors) {
            errors[i].style.border = "3px solid red";
            errors[i].style.color = "red";
        } for(let i in filled) {
            filled[i].style.border = "1px solid gray";
            filled[i].style.color = "black";
        }
    }

    whatsNotFilled() {
        let arrayOfErrors = [];
        let array = [
            document.getElementById("classCodeBox"), document.getElementById("startYearBox"), document.getElementById("endYearBox")
        ];
        let arrayOfLife = [];

        for (let i = 0; i < array.length; i++) {
            if(array[i].value === null)
                arrayOfErrors.push(array[i]);
            else if(array[i].value.replace(/\s/g, "") === "")
                arrayOfErrors.push(array[i]);
            else
                arrayOfLife.push(array[i]);
        }
        let answer = {
            errors: arrayOfErrors,
            filled: arrayOfLife
        };
        return answer;
    }

    LoadOldCurriculum() {
        if(this.whatsNotFilled().errors.length !== 0) {
            this.highlightNotFilled(this.whatsNotFilled());
        }
        else
            this.setState({iframeWindow: 2});
    }

    changeToConfirm(classDetails) {
        this.setState({iframeWindow: 0, confirmScreen: true, classDetails: classDetails, classCode: classDetails.code,
            startYear: classDetails.start, endYear: classDetails.end});
    }

    cancelConfirm() {
        this.setState({confirmScreen: false});
    }

    saveConfirm() {
        const fullClassName = this.state.classDetails.code + "_" + this.state.classDetails.start + "-" + this.state.classDetails.end;
        const task = this.state.classDetails.taskList;
        const cur = this.state.classDetails.curriculum;
        axios.post(`http://localhost:8080/api/data/class/createClass/${fullClassName}/${cur}/${task}`);
    }
}
