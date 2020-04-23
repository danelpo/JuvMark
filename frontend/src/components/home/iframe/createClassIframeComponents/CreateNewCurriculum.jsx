import React from 'react';
import '../iframeStyles.css';

export default class CreateNewCurriculum extends React.Component {

    render() {
        return(
            <div className="iframeContent">
                <h1>Create Curriculum for: {this.props.classCode}</h1>
            </div>
        )
    }
}