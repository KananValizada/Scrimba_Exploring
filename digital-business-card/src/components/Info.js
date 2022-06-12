import React from "react";
import imgKanan from "../images/Kanan.jpg";
import classes from "./Info.module.css";
import About from "./About";

const Info = () => {
  return (
    <div className={classes.info}>
      <img src={imgKanan} alt="Kanan Valizada" />
      <h1 className={classes.name}>Kanan Valizada</h1>
      <p className={classes.job}>Frontend Developer</p>
      <span className={classes.github}>https://github.com/KananValizada</span>
      <div className={classes.buttonGroup}>
        <button className={classes.email}>Email</button>
        <button className={classes.linkedn}>LinkedIn</button>
      </div>
    </div>
  );
};

export default Info;
