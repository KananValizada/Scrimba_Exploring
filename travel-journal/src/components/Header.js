import React from "react";
import world from "../images/world.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav className={classes.nav}>
      <img src={world} />
      <p>my travel journal.</p>
    </nav>
  );
};

export default Header;
