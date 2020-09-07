import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import './App.css';
import ClassList from '../ClassList/ClassList'
import ClassDetails from '../ClassDetails/ClassDetails'
import MonsterList from '../MonsterList/MonsterList'
import MonsterDetails from '../MonsterDetails/MonsterDetails'
import SpellSearch from '../SpellSearch/SpellSearch'
import SpellDetails from '../SpellDetails/SpellDetails'

function App() {
  return (
    <>
    <Route exact path='/classlist' render={() =>
      <ClassList />
    }/>
    <Route exact path='/monsterlist' render={() =>
      <MonsterList />
    }/>
    <Route exact path='/monster/:name' render={({ location }) => 
      <MonsterDetails 
        location={location}
      />
    }/>
    <Route exact path='/spell/:name' render={({ location, match }) => 
      <SpellDetails 
        location={location}
        match={match}
      />
    }/>
    <Route exact path='/class/:name' render={({ location }) => 
      <ClassDetails 
        location={location}
      />
    }/>
    <Route exact path='/spellsearch' render={() =>
      <SpellSearch 
      />
    }/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Wait does this work?
        </p>
        <a href="/classlist">Class List, Bitches</a>
        <a href="/monsterlist">Scary Monsters HURR</a>
        <a href="/spellSearch">Search for Spellz</a>
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