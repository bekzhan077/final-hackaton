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
        <div className="block-1b">
          <div className="header-right">
            <div className="diamond-wrapper">
              <img
                className="header-img"
                src="https://bestway.kg/wp-content/uploads/2020/08/3-7.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="block-2b">
          <div className="header-right">
            <div className="diamond-wrapper">
              <img
                className="header-img"
                src="https://too.kg/wp-content/uploads/Plov-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="block-3b">
          <div className="header-right">
            <div className="diamond-wrapper">
              <img
                className="header-img"
                src="https://diesel.elcat.kg/uploads/monthly_02_2011/post-32137-1298711712.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="block-4b">
          <div className="header-right">
            <div className="diamond-wrapper">
              <img
                className="header-img"
                src="https://superg.ru/wp-content/uploads/2022/09/IMG_0381.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <CardItem />
    </div>
  );
};

export default CardList;
