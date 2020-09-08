import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ClassList from '../ClassList/ClassList'
import ClassDetails from '../ClassDetails/ClassDetails'
import MonsterList from '../MonsterList/MonsterList'
import MonsterDetails from '../MonsterDetails/MonsterDetails'
import SpellSearch from '../SpellSearch/SpellSearch'
import SpellDetails from '../SpellDetails/SpellDetails'
import NavBar from '../../components/NavBar/NavBar'

function App() {
  return (
    <>
    <NavBar />
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
    
    </>
  );
}

export default App;