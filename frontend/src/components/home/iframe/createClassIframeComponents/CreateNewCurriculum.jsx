import React from 'react';
import '../iframeStyles.css';

export default class CreateNewCurriculum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            returnedData: null,
            serverMessage: null,
        }
    }

    /*componentDidMount() {
        //console.log("ALERT ERROR: CreateNewCurriculum, line 13: fetch only works on 8080, not 3000");
        //fetch('http://localhost:8080/data/hello').then(results => {return results}).then(data => {console.log(data); this.setState({returnedData: data});});
    }

    doFetchAndBuild = (nodeAPI) => {
        fetch(nodeAPI)
            .then(Response => {
                     if (! Response.ok) {
                         console.log("ERROR:  " + Response)
                     } else {
                         console.log("Respone ok");
                        return Response.text();
                     }
             })
            .then(message => {
            	//this.setState({lastJSON : message});
                console.log(message);
            })
    };

    componentDidMount() {
        this.doFetchAndBuild('/data/hello');
    }

    componentDidUpdate() {
        this.doFetchAndBuild('/data/hello');
    }
    */

   componentDidMount() {
       fetch('http://localhost:8080/data/hello').then(Response => {return Response.text()}).then(Message => {
           console.log(Message);this.setState({serverMessage: Message});});
   }
   
    render() {
        let serverMessage = this.state.serverMessage;
        console.log(serverMessage);
        return(
            <div className="iframeContent">
                <h1>Create Curriculum for: {this.props.classCode}</h1>
                <h4>Message recieved from server: {serverMessage}</h4>
                <h5>The message above is an example of React reciveing data from server</h5>
                <h5>"{serverMessage}" has been set in the HelloWorldTest.java file, line 14</h5>
            </div>
        )
    }
}