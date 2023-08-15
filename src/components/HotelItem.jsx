import { Box } from "@mui/material";
import React, { useEffect } from "react";
import "../styles/TourItem.css";
import { useProductContext } from "../contexts/ProductContext";

const HotelItem = ({ item, id }) => {
  return (
    <Box>
      <div className="tour_card">
        <img className="tour_card__image1" src={item.preview} alt="Tour 1" />
        <div className="tour_card__content">
          <p className="tour_card__title">{item.title}</p>
          <p className="tour_card_description">{item.description}</p>
          <p className="tour_card__text">{item.price}</p>
          <a className="tour_card__button" href="#">
            Read More
          </a>
        </div>
      </div>
    </Box>
  );
};

export default HotelItem;
