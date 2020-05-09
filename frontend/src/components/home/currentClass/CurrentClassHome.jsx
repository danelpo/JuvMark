import React from 'react';
import './CurrentClassStyles.css';
import StudentList from './components/StudentList.jsx';
import ClassContent from './components/ClassContent.jsx';

export default class CurrentClassHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            className: null,
            classDetails: null,//need to get task list and curriculum from file when eric is done
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:8080/api/data/class/current/view').then(Response => {return Response.text()}).then(message => {
            console.log(message);this.setState({className: message})});
    }

    render() {
        return(
            <div className="CurrentClass">
                <div className="topBar">{this.state.className}</div>
                <div className="studentList"><StudentList/></div>
                <div className="classContent"><ClassContent/></div>
            </div>
        )
    }
}