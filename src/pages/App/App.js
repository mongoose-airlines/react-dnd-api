import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'

import './App.css';
import * as API from '../../services/api-calls'
import ClassList from '../ClassList/ClassList'

function App() {
  return (
    <>
    <Route exact path='/classlist' render={() =>
      <ClassList />
    }/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Wait does this work?
        </p>
        <a href="/classlist">Class List, Bitches</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
