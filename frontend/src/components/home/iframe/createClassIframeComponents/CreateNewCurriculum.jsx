import React from 'react';

export default class CreateNewCurriculum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            returnedData: null,
        }
    }

    componentDidMount() {
        //console.log("ALERT ERROR: CreateNewCurriculum, line 13: fetch only works on 8080, not 3000");
        //fetch('http://localhost:8080/data/hello').then(results => {return results}).then(data => {console.log(data); this.setState({returnedData: data});});
    }

    render() {
        let returnedText = <h3>This is the text recived from server: {this.state.returnedData}</h3>
        return(
            <div>
                <h1>Create Curriculum Test</h1>
                {returnedText}
            </div>
        )
    }
}