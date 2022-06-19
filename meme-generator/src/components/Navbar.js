import React from "react";
import trollFace from "../images/TrollFace.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navLogo}>
        <img src={trollFace} alt="trolFace" />
        <h1>Meme Generator</h1>
      </div>
      <h3>React Course - Project 3</h3>
    </nav>
  );
};

export default Navbar;
