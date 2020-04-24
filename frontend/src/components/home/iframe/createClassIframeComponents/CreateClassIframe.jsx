import React from 'react';
import '../iframeStyles.css';
import CreateNewCurriculum from './CreateNewCurriculum.jsx';
import LoadOldCurriculum from './LoadOldCurriculum.jsx';

export default class CreateClassIframe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classCode: props.classCode,
            startYear: props.startYear,
            endYear: props.endYear,
            semester: props.semester,
            iframeWindow: 0,
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

        let semesterValue = document.getElementById("semesterBox").value;
        if(semesterValue === "")
            this.props.changeProps("semester", null);
        else
            this.props.changeProps("semester", semesterValue);
    }

    render() {
        let classCodeInitValue;
        if(this.state.classCode) {
            classCodeInitValue = this.state.classCode;
            this.setState({classCode: null});
        }
        let startYearInitValue;
        if(this.state.startYear) {
            startYearInitValue = this.state.startYear;
            this.setState({startYear: null});
        }

        let endYearInitValue;
        if(this.state.endYear) {
            endYearInitValue = this.state.endYear;
            this.setState({endYear: null});
        }

        let semesterInitValue;
        if(this.state.semester) {
            semesterInitValue = this.state.semester;
            this.setState({semester: null});
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
                <h4>Please enter school year in the designated textboxes:</h4>
                <div className="textBoxDiv" id="yearDateDiv">
                    <input type="text" className="textBox yearDateTextBox" id="startYearBox" placeholder="Start Year (2019)"
                    value={startYearInitValue} onChange={() => this.apdateHomeValues()} />
                    
                    <input type="text" className="textBox yearDateTextBox" id="endYearBox" placeholder="End Year (2020)"
                    value={endYearInitValue} onChange={() => this.apdateHomeValues()} />
                    
                    <input type="text" className="textBox yearDateTextBox" id="semesterBox" placeholder="Semester (1 or 2)"
                    value={semesterInitValue} onChange={() => this.apdateHomeValues()} />
                </div>
                <br/>
                <h4>Please select a curriculum option:</h4>
                <div className = "buttonDiv" id="curriculumButtonDiv">
                    <button className="textBox curriculumButton" id="CreateCurriculumButton"
                    onClick={() => this.CreateCurriculum()}>Create Curriculum</button>
                    
                    <button className="textBox curriculumButton" id="OldCurriculumButton"
                    onClick={() => this.LoadOldCurriculum()}>Use Old Curriculum</button>
                </div>
            </div>
        );
        let createCurriculumIframe = (
                <CreateNewCurriculum classCode={this.props.classCode? this.props.classCode : "Class Code Not Given"}/>
        );

        let loadOldCurriculumIframe = (
            <div className="iframeContent">
                <LoadOldCurriculum classCode={this.props.classCode? this.props.classCode : "Class Code Not Given"}/>
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
        this.setState({iframeWindow: 1});
    }
    LoadOldCurriculum() {
        this.setState({iframeWindow: 2});
    }
}
