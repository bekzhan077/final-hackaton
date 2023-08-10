import React from "react";
import CardItem from "./CardItem";

const CardList = () => {
  return (
    <div>
      <div className="main">
        <div style={{ marginRight: "40px" }} className="hh-header">
          <h1 className="h1-header">Wheare to go!</h1>
          <h3 className="h3-header">by regions</h3>
        </div>
      </div>
      <CardItem />
    </div>
  );
};

export default CardList;
