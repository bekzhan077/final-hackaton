import React, { useEffect } from "react";
import "../styles/TourItem.css";
import { Box } from "@mui/material";
import { useProductContext } from "../contexts/ProductContext";

const TourItem = ({ item }) => {
  const { getProducts1 } = useProductContext();
  useEffect(() => {
    getProducts1();
  }, []);
  return (
    <Box
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div className="tour_card">
        <img className="tour_card__image1" src={item.preview} alt="Tour 1" />
        <div className="tour_card__content">
          <p className="tour_card__title">{item.title}</p>
          <p className="tour_card__text"></p>
          <a className="tour_card__button" href="#">
            Read More
          </a>
        </div>
      </div>
    </Box>
  );
};

export default TourItem;
