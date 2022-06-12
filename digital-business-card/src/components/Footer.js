import React from "react";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import github from "../images/github.svg";
import instagram from "../images/instagram.svg";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <img className={classes.filter} src={twitter} alt="twitter" />
      <img className={classes.filter} src={facebook} alt="facebook" />
      <img className={classes.filter} src={instagram} alt="instagram" />
      <img className={classes.filter} src={github} alt="github" />
    </div>
  );
};

export default Footer;
