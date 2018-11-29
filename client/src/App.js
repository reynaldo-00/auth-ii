import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Users from './components/Users';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div> 

          </div>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/login" component={Login} />
            {/* <Route path="/register" component={} /> */}
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;