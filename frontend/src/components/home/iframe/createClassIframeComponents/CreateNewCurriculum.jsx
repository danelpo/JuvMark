import React from 'react';
import '../iframeStyles.css';

export default class CreateNewCurriculum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            returnedData: null,
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
   
    render() {
        return(
            <div className="iframeContent">
                <h1>Create Curriculum for: {this.props.classCode}</h1>
            </div>
        )
    }
}