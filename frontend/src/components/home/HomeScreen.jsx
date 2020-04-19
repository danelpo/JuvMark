import React from 'react';
import './homeScreenStyles.css';
import CreateClassIframe from './iframe/CreateClassIframe.jsx';
import CurrentClassIframe from './iframe/CurrentClassIframe.jsx';
import PastClassIframe from './iframe/PastClassIframe.jsx';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            iframeButtonControl: null,
            createClass_ClassCode: null,
            createClass_startYear: null,
            createClass_endYear: null,
            createClass_semester: null,
            home: this,
        }
    }

    buttonClicked(buttonNumber) {
        let that = this;
        //moves buttons and loads iframe
        let buttonList = document.body.getElementsByClassName("homeButton");
        const destinationXpoint = window.innerWidth / 10;
        
        var id = setInterval(frame, 5);
        function frame() {
            let myFrame = document.body.getElementsByClassName("mainIframe")[0];
            for (let buttonIndex = 0; buttonIndex < buttonList.length; buttonIndex++) {
                let button = buttonList[buttonIndex];
                /***MOVES BUTTONS LEFT***/
                if(button.getBoundingClientRect().x < destinationXpoint) {
                    clearInterval(id);
                } else {
                    button.style.left = (button.getBoundingClientRect().x - 3).toString() + "px";
                }
                /***FADE IN IFRAME***/
                let alpha = that.getAlpha(getComputedStyle(document.body.getElementsByClassName("mainIframe")[0]).backgroundColor);
                if(alpha < 1) {
                    myFrame.style.backgroundColor = "rgba(245,245,245,"+((parseFloat(alpha) + 0.005).toString())+")";
                    myFrame.style.color = "rgba(0,0,0,"+((parseFloat(alpha) + 0.005).toString())+")";
                }
            }
        }
        //loads iframe depends on what button was pressed
        this.loadIframe(buttonNumber);
    }

    changeProps(prop, value) {
        if(prop === "classCode") {
            this.setState({createClass_ClassCode: value});
        } else if(prop === "startYear") {
            this.setState({createClass_startYear: value});
        }
    }

    getAlpha(string) {
        let split1 = null;
        let split2 = null;
        let split3 = null;
        for (let i = 0; i < string.length; i++) {
           if (string.substring(i, i+1) === ',') {
              if (split1 === null) {
                 split1 = i;
              } else if(split2 === null) {
                 split2 = i;
              } else {//slpit 3
                 split3 = i;
                 break;
              }
           }
        }
        if(split3 === null){//rgb instead of rgba
           return 1;
        }
        let alpha = null;
        for (let i = split3; i < string.length; i++) {
           if(string.substring(i, i+1) === ')') {
              alpha = string.substring(split3+2, i);
              break;
           }
        }
        return parseFloat(alpha);
     }

     loadIframe(buttonNumber) {
        this.setState({iframeButtonControl: buttonNumber});
     }

    render() {
        console.log(this.state);

        let iframeContent;
        if(this.state.iframeButtonControl === 0) {
            iframeContent = <CurrentClassIframe />
        } else if (this.state.iframeButtonControl === 1) {
            iframeContent = <CreateClassIframe
                classCode={this.state.createClass_ClassCode}
                startYear={this.state.createClass_startYear}
                endYear={this.state.createClass_endYear}
                semester={this.state.createClass_semester}
                changeProps={this.changeProps.bind(this)}
            />;
        } else if (this.state.iframeButtonControl) {
            iframeContent = <PastClassIframe />;
        }
        
        return (
            <div>
                <div className="mainIframe">
                    {iframeContent}
                </div>
                <input type="button" className="homeButton" value="Current Classes"
                style={{top: ((window.innerHeight / 4) - (window.innerHeight / 20)).toString() + "px"}}
                onClick={() => this.buttonClicked(0)}/>
                <input type="button" className="homeButton" value="Create Class"
                style={{top: ((window.innerHeight / 2) - (window.innerHeight / 20)).toString() + "px"}}
                onClick={() => this.buttonClicked(1)}/>
                <input type="button" className="homeButton" value="Past Classes"
                style={{top: ((window.innerHeight * 3/ 4) - (window.innerHeight / 20)).toString() + "px"}}
                onClick={() => this.buttonClicked(2)}/>
            </div>
        )
    }
}