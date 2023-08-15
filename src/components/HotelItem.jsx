import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import "../styles/TourItem.css";
import { useProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const HotelItem = ({ item, id }) => {
  const { getProducts } = useProductContext();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box>
      <div className="tour_card">
        <img className="tour_card__image1" src={item.preview} alt="Tour 1" />
        <div className="tour_card__content">
          <p className="tour_card__title">{item.title}</p>
          <p className="tour_card_description">item.description</p>
          <p className="tour_card__text">{item.price}</p>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={`/detail/${item.id}`}
          >
            View Details
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default HotelItem;
