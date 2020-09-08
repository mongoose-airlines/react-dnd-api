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
        <a href="/classlist">Class List, Bitches</a>
        <a href="/monsterlist">Scary Monsters HURR</a>
        <a href="/spellSearch">Search for Spellz</a>
      </header>
  );
};

export default NavBar;
