import React from "react";
import Header from "./components/Header";
import classes from "./App.module.css";
import TravelItem from "./components/TravelItem";
import data from "./data";
const App = () => {
  return (
    <div className={classes.container}>
      <Header />
      {data.map((d) => {
        return <TravelItem key={d.title} item={d} />;
      })}
    </div>
  );
};

export default App;
