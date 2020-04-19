import React from 'react';
import './iframeStyles.css';

export default class CreateClassIframe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classCode: props.classCode,
            startYear: props.startYear,
            endYear: props.endYear,
            semester: props.semester,
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


        return(
            <div className="iframeContent">
                <h1>Create Class</h1>
                <h4>Please enter class code in the following format:</h4>
                <div className="textBoxDiv" id="classCodeDiv">
                    <input type="text" className="textBox" id="classCodeBox" placeholder="ICS4U-01" value={classCodeInitValue} onChange={() => this.apdateHomeValues()}/>
                </div>
                <br/>
                <h4>Please enter school year in the designated textboxes:</h4>
                <div className="textBoxDiv" id="yearDateDiv">
                    <input type="text" className="textBox yearDateTextBox" id="startYearBox" placeholder="Start Year (2019)" value={startYearInitValue} onChange={() => this.apdateHomeValues()} />
                    <input type="text" className="textBox yearDateTextBox" id="EndYearBox" placeholder="End Year (2020)" onChange={() => this.apdateHomeValues()} />
                    <input type="text" className="textBox yearDateTextBox" id="SemesterBox" placeholder="Semester (1 or 2)" onChange={() => this.apdateHomeValues()} />
                </div>
                <br/>
                <h4>Please select a curriculum option:</h4>
                <div className = "buttonDiv" id="curriculumButtonDiv">
                    <button className="textBox curriculumButton" id="CreateCurriculumButton" onClick={() => this.CreateCurriculum()}>Create Curriculum</button>
                    <button className="textBox curriculumButton" id="OldCurriculumButton">Use Old Curriculum</button>
                </div>
            </div>
        )
    }

    CreateCurriculum() {
        this.apdateHomeValues();
    }
}
