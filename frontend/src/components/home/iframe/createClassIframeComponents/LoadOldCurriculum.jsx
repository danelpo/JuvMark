import React from 'react';
import '../iframeStyles.css';
import Select from 'react-select';
import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';
import TaskListOptionScreen from './TaskListOptionScreen.jsx';

export default class LoadOldCurriculum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCurriculums: null,
            openOption: null,
            viewMode:false,
            curriculumExpectations: null,
            taskWindow: false,
            classDetails: props.classDetails,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/data/curriculum').then(Response => {return Response.json()}).then(Message => {
            this.setState({allCurriculums: Message});});
    }

    handleChange = selectedOption => {
        this.setState({openOption: selectedOption, viewMode:false});
    }

    options = () => {
        let optionArray = [];
        this.state.allCurriculums.map(curriculumName => (
            optionArray.push({value: curriculumName, label: curriculumName})));
        return optionArray;
    }

    viewCurriculum = () => {
        fetch('http://localhost:8080/api/data/curriculum/' + this.state.openOption.label).then(Respone => {return Respone.json()}).then(Message => {
            this.setState({curriculumExpectations: Message.Curriculums});
        });
        this.setState({viewMode:true});
    }

    saveCurriculum = () => {
        let newJsonObject = this.state.classDetails;
        newJsonObject.curriculum = this.state.openOption.label;
        this.setState({taskWindow:true, classDetails: newJsonObject});
    }

    render() {
        let dropMenu, curriculumButtonDiv, viewIframe = null;

        if(this.state.allCurriculums) {
            dropMenu = (<Select className="loadCurriculumDropDownMenu" value={this.state.openOption} onChange={this.handleChange} options={this.options()}/>);
            
            if(this.state.openOption) {
                curriculumButtonDiv = (<div className="textBoxDiv" id="optionDropMenuDiv">
                    <button className="textBox oldCurriculumSelectOptionButton" id="oldCurriculumSaveOption" onClick={this.saveCurriculum}>Save</button>
                    <button className="textBox oldCurriculumSelectOptionButton" id="oldCurriculumViewOption" onClick={this.viewCurriculum}>View</button>
                </div>);
            }
        }
        
        if(this.state.viewMode) {
            let StyleTop = (document.getElementById("optionDropMenuDiv").getBoundingClientRect().bottom + 20).toString() + "px";
            const columns = [{ key: 'expectation', name: 'Expectation' },{ key: 'description', name: 'Description' }];
            let rows = [];
            if(this.state.curriculumExpectations) {
                let curriculum = []
                for(var i in this.state.curriculumExpectations)
                    curriculum.push([i, this.state.curriculumExpectations[i]]);
                curriculum.map(cur => (rows.push({expectation: cur[1].CurriculumNumber, description: cur[1].Description})));
            }
            viewIframe = (
                <div id="viewOldCurriculumIframe" style={{top: StyleTop}}>
                    <DataGrid columns={columns} rows={rows}/>
                </div>
            );
        }

        let projectedScreen = (
            <div className="iframeContent">
                <h1 style={{fontSize: "3vmin"}}>Load Curriculum for: {this.props.classCode}</h1>
                <div style={{width: "100%", alignContent: "center"}}>
                    {dropMenu}
                </div>
                {curriculumButtonDiv}
                {viewIframe}
            </div>
        );

        if(this.state.taskWindow) {
            projectedScreen = (
                <TaskListOptionScreen currentCurriculum={this.state.openOption.label}
                changeToConfirm={this.props.changeToConfirm} classDetails={this.state.classDetails}/>
            );
        }
        return projectedScreen;
    }
}