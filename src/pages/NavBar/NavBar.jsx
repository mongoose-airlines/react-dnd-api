import React from "react";
import logo from '../App/logo.gif'

const NavBar = () => {
  return (
      <header className="App-header">
        <img
          src={logo}
          style={{ width: "100px", height: "100px" }}
          className="App-logo"
          alt="logo"
        />
        <a href="/classlist">Class List, Bitches</a>
        <a href="/monsterlist">Scary Monsters HURR</a>
        <a href="/spellSearch">Search for Spellz</a>
      </header>
  );
};

export default NavBar;
