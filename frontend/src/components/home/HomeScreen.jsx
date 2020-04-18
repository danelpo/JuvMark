import React from 'react';
import './homeScreenStyles.css';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <div>
                <input type="button" className="homeButton" value="Current Classes"
                style={{top: ((window.innerHeight / 4) - (window.innerHeight / 20)).toString() + "px"}}/>
                <input type="button" className="homeButton" value="Create Class"
                style={{top: ((window.innerHeight / 2) - (window.innerHeight / 20)).toString() + "px"}}/>
                <input type="button" className="homeButton" value="Past Classes"
                style={{top: ((window.innerHeight * 3/ 4) - (window.innerHeight / 20)).toString() + "px"}}/>
            </div>
        )
    }
}