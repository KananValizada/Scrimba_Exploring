import React from "react";
import logo from "../images/react-icon-small.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarLogo}>
        <img src={logo} />
        <p>ReactFacts</p>
      </div>
      <h3>React Course - Project 1</h3>
    </nav>
  );
};

export default Navbar;
