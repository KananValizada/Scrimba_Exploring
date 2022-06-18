import React from "react";
import pointer from "../images/pointer.png";
import classes from "./TravelItem.module.css";

const TravelItem = ({ item }) => {
  return (
    <div className={classes.travelItem}>
      <img src={item.imageUrl} alt="img" />
      <div className={classes.travelItemContent}>
        <div className={classes.travelItemHeader}>
          <img src={pointer} />
          <p>{item.location}</p>
          <a href={item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{item.title}</h1>
        <p className={classes.travelItemDate}>
          {item.startDate} - {item.endDate}
        </p>
        <p className={classes.travelItemInfo}>{item.description}</p>
      </div>
    </div>
  );
};

export default TravelItem;
