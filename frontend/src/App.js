import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeScreen from './components/home/HomeScreen.jsx';
import CurrentClassHome from './components/home/currentClass/CurrentClassHome.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomeScreen}/>
          <Route path="/current-class" exact component={CurrentClassHome}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
