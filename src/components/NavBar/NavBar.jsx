import React from "react";

const NavBar = (props) => {
  console.log(props)
  return (
      <header className="App-header">
        <img
          src='/images/logo.svg'
          style={{ width: "100px", height: "100px" }}
          className="App-logo"
          alt="logo"
        />
        {props.navItems.map((navItem, idx) =>
          <a key={idx} href={navItem.url}>{navItem.name}</a>
        )}
      </header>
  );
};

export default NavBar;
