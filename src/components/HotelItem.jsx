import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import "../styles/TourItem.css";
import { useProductContext } from "../contexts/ProductContext";
import { Link, useNavigate } from "react-router-dom";

const HotelItem = ({ item, id }) => {
  const { getHotel, deleteHotel } = useProductContext();

  const navigate = useNavigate();

  useEffect(() => {
    getHotel();
  }, []);

  return (
    <Box>
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
            onClick={() => deleteHotel(item.id)}
          >
            Delete
          </Button>
          <Button
            sx={{ mt: 1 }}
            variant="outlined"
            color="primary"
            onClick={() => navigate(`/hoteledit/${item.id}`)}
          >
            Edit Tour
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default HotelItem;
