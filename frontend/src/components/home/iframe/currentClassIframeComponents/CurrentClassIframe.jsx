import React from 'react';
import Select from 'react-select';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class CurrentClassIframe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openOption: null,
            classesList: [],
            redirect: false,
        }
    }

    handleChangeInOption = select => {
        this.setState({openOption: select});
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/data/class/current/all').then(Response => {return Response.json()}).then(message => {this.setState({classesList:message})});
    }

    getOptions = () => {
        const myList = [];
        this.state.classesList.forEach(element => {myList.push({value: element, label: element})});
        return myList;
    }

    sendClassName = () => {
        axios.post(`http://localhost:8080/api/data/class/current/open/${this.state.openOption.label}`).then(() => {this.setState({redirect: true})});
    }

    render() {
        if(this.state.openOption) {
            //document.getElementsByClassName("currentClassIframeButton").forEach(button => {button.style.visibility = "hidden"});
            Array.prototype.forEach.call(document.getElementsByClassName("currentClassIframeButton"), function(button) {
                button.style.visibility = "visible";
            });
        }
        if(this.state.redirect) {
            return <Redirect to="/current-class"/>
        }
        return(
            <div>
                <h1>Current Classes</h1>
                <h2>Please select the class you would like to view</h2>
                <Select className="chooseClassDropDownCurrent" value={this.state.openOption} onChange={this.handleChangeInOption} options={this.getOptions()}/>
                <button className="currentClassIframeButton" style={{left: "-2%"}} onClick={this.sendClassName}>Continue</button>
                <button className="currentClassIframeButton" style={{left: "2%"}}>View details</button>
            </div>
        )
    }
}
