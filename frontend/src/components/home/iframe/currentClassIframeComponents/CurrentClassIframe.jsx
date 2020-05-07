import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

export default class CurrentClassIframe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openOption: null,
            classesList: [],
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

    render() {
        if(this.state.openOption) {
            //document.getElementsByClassName("currentClassIframeButton").forEach(button => {button.style.visibility = "hidden"});
            Array.prototype.forEach.call(document.getElementsByClassName("currentClassIframeButton"), function(button) {
                button.style.visibility = "visible";
            });
        }
        return(
            <div>
                <h1>Current Classes</h1>
                <h2>Please select the class you would like to view</h2>
                <Select className="chooseClassDropDownCurrent" value={this.state.openOption} onChange={this.handleChangeInOption} options={this.getOptions()}/>
                <Link to="/current-class">
                    <button className="currentClassIframeButton" style={{left: "-2%"}}>Continue</button>
                </Link>
                <button className="currentClassIframeButton" style={{left: "2%"}}>View details</button>
            </div>
        )
    }
}
