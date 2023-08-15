import React, { useEffect } from "react";
import "../styles/TourItem.css";
import { Box, Button } from "@mui/material";
import { useProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const TourItem = ({ item }) => {

  const { getTour } = useProductContext();
  useEffect(() => {
    getTour();
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

export default TourItem;
