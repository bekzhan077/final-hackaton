import React, { useEffect } from "react";
import "../styles/TourItem.css";
import { Box, Button } from "@mui/material";
import { useProductContext } from "../contexts/ProductContext";
import { Link, useNavigate } from "react-router-dom";

const TourItem = ({ item }) => {
  const { getTour, deleteTour, getOneTour } = useProductContext();

  const navigate = useNavigate();

  useEffect(() => {
    getTour();
  }, []);

  return (
    <Box
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div className="tour_card">
        <img className="tour_card__image1" src={item.preview} alt="Tour 1" />
        <img className="tour_card__image2" src={item.images} alt="Tour 2" />

        <div className="tour_card__content">
          <p className="tour_card__title">{item.title}</p>
          <p className="tour_card_description">{item.description}</p>
          <p className="tour_card__text">{item.price}$</p>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={`/detail/${item.id}`}
          >
            View Details
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => deleteTour(item.id)}
          >
            Delete
          </Button>
          <Button
            sx={{ mt: 1 }}
            variant="outlined"
            color="primary"
            onClick={() => navigate(`/touredit/${item.id}`)}
          >
            Edit Tour
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default TourItem;
