import React from "react";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div style={{ padding: "0 36px" }}>
        <Meme />
      </div>
    </div>
  );
};

export default App;
