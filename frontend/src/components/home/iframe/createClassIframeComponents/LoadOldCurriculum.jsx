import React from 'react';
import '../iframeStyles.css';
import Select from 'react-select';

export default class LoadOldCurriculum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serverMessage: null,
            blockString: "Please select an item",
            openOption: null,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/data/curriculum').then(Response => {return Response.json()}).then(Message => {
            this.setState({serverMessage: Message});});
    }

    handleChange = selectedOption => {
        this.setState({openOption: selectedOption});
        console.log(selectedOption.label);
    }

    options = () => {
        let optionArray = [];
        this.state.serverMessage.map(curriculumName => (
            optionArray.push({value: curriculumName, label: curriculumName})));
        return optionArray;
    }

    render() {
        let dropMenu, curriculumButtonDiv = null;

        if(this.state.serverMessage) {
            dropMenu = (<Select className="loadCurriculumDropDownMenu" value={this.state.openOption} onChange={this.handleChange} options={this.options()}/>);
            
            if(this.state.openOption) {
                curriculumButtonDiv = (<div className="textBoxDiv">
                    <button className="textBox oldCurriculumSelectOptionButton" id="oldCurriculumSaveOption">Save</button>
                    <button className="textBox oldCurriculumSelectOptionButton" id="oldCurriculumViewOption">View</button>
                </div>);
            }
        }
        return(
            <div className="iframeContent">
                <h1>Load Curriculum for: {this.props.classCode}</h1>
                <div style={{width: "100%", alignContent: "center"}}>
                    {dropMenu}
                </div>
                {curriculumButtonDiv}
            </div>
        )
    }
}