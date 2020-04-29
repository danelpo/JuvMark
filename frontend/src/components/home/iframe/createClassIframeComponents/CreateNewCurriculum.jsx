import React from 'react';
import '../iframeStyles.css';
import axios from 'axios';

export default class CreateNewCurriculum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allCurriculumsArray: null,
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

    validateCurriculumName = curriculumPureName => {
        if(this.state.allCurriculumsArray) {
            let allCurriculums = this.state.allCurriculumsArray;
            let allCurriculumsPureNames = [];
            //console.log(allCurriculums);
            //console.log(allCurriculums.includes(curriculumPureName)? "Curriculum exists" : "New Curriculum");
        }
        return curriculumPureName;
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/data/curriculum').then(Response => {return Response.json()}).then(message => {this.setState({allCurriculumsArray: message})});        
    }

    async postData(data = {}) {
        const Response = await fetch('http://localhost:8080/api/data/user', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return Response.json();
    }

    getTest = () => {
        fetch('http://localhost:8080/api/data/curriculum/ICS4U_2019-2020_2/tasks/ICS4U_2019-2020_2/T1').then(Response => {return Response.json()}).then(message => {
            //console.log(message);
        })
    }

    render() {
        this.postData({answer: '42'}).then(data => {console.log(data)});
        this.getTest();
        const testInformation = {
            name: "Danel Polyakov",
            age: "17",
            grade: "12",
            highSchool: "Earl of March"
        };
        axios.post("http://localhost:8080/api/data/user", testInformation).then(response => {console.log(response)});
        let courseCode = this.courseCodeFromClassCode(this.props.classDetails.code);
        let pureCurriculumName = courseCode + "_" + this.props.classDetails.start + "-" + this.props.classDetails.end;
        //console.log(pureCurriculumName);
        let proposedCurriculumName = this.validateCurriculumName(pureCurriculumName);
        return(
            <div className="iframeContent">
                <h1>Create Curriculum for: {this.props.classCode}</h1>
                <h2>Creating Curriculum: {proposedCurriculumName}</h2>
            </div>
        )
    }
}