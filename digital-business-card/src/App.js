import React from "react";
import Info from "./components/Info";
import classes from "./App.module.css";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className={classes.container}>
      <div
        style={{
          width: "317px",
          backgroundColor: "#1A1B21",
          marginTop: "44px",
        }}
      >
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
};

export default App;
