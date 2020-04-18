import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomeScreen from './components/home/HomeScreen.jsx';

function App() {
  return (
    <div className="App">
      {/*<p>hello darkness my old buddy</p>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>*/}
      <HomeScreen />
    </div>
  );
}

export default App;
