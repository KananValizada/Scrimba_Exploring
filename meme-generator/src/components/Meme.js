import React from "react";
import classes from "./Meme.module.css";
import data from "../memesData";

const Meme = () => {
  const getMemeHandler = () => {
    let a = Math.random() * data.data.memes.length;
    console.log(data.data.memes[Math.floor(a)].url);
  };

  return (
    <form>
      <div className={classes.meme}>
        <input type="text" placeholder="Shut up" />
        <input type="text" placeholder="and take my money" />
      </div>

      <button
        type="button"
        className={classes.memeBTN}
        onClick={getMemeHandler}
      >
        Get a new meme image 🖼
      </button>
    </form>
  );
};

export default Meme;
