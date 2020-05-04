import React from 'react';
import DataGrid from 'react-data-grid';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';

export default class CreateNewTaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            columns: [{key: 'name', name: 'Task Name'},{key: 'expectations', name: 'Expectations'},{key: 'desc', name: 'Description'}],
            taskListName: null,
            newCurriculum: this.props.curriculum ? true : false,
        }
        console.log("new curriculum: " + this.state.newCurriculum);
    }

    componentDidMount() {
        const taskListName = this.props.curriculumName + "_1";
        this.setState({taskListName});
    }

    getTaskInfo = () => {

    }

    saveTaskList = () => {

    }
    
    render() {
        let myNumber;
        if(document.body.getElementsByClassName("iframeContent")) {
            myNumber = document.body.getElementsByClassName("iframeContent")[0].getBoundingClientRect().height * 0.75;
        }

        return(
            <div className="iframeContent">
                <h2>Creating Task List: {this.state.taskListName}</h2>
                <h3>For curriculum: {this.props.curriculumName}</h3>
                <SaveIcon className="saveButtonForCreateCurriculum" style={{fontSize: 40}} onClick={() => {this.saveTaskList(this)}}/>
                <DataGrid columns={this.state.columns} rows={this.state.rows} height={myNumber}/>
                <AddIcon style={{fontSize: 80}} onClick={() => {this.getTaskInfo(this)}}/>
            </div>
        )
    }
}