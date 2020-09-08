import React from "react";

const NavBar = () => {
  return (
      <header className="App-header">
        <img
          src='/images/logo.svg'
          style={{ width: "100px", height: "100px" }}
          className="App-logo"
          alt="logo"
        />
        <a href="/classlist">Class List</a>
        <a href="/monsterlist">Scary Monsters</a>
        <a href="/spellSearch">Search for Spells</a>
      </header>
  );
};

export default NavBar;
