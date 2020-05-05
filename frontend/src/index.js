import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

document.onkeyup = e => {
  //popup when creating a new curriculum
  if(document.getElementById("createCurriculumPopupBackground")) {
    if(e.key === "Escape")
      document.getElementById("createCurriculumPopupBackground").click();
    else if(e.key === "Enter")
      document.getElementById("saveUserInputInCreateCurriculumButton").click();
  }

  //popup when creating a new tasks list
  if(document.getElementById("createTaskListPopupBackground")) {
    if(e.key === "Escape")
      document.getElementById("createTaskListPopupBackground").click();
    else if(e.key === "Enter")
      document.getElementById("saveUserInputInCreateTaskListButton").click();
  }
}