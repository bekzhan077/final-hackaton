import React, { useEffect } from "react";
import "../styles/TourItem.css";
import { Box, Button } from "@mui/material";
import { useProductContext } from "../contexts/ProductContext";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const TourItem = ({ item }) => {
  const { getTour, deleteTour, getOneTour } = useProductContext();
  const { isAlreadyIsCart, addPostToCart, deleteDishFromCart } =
    useCartContext();
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
            sx={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              fontWeight: 600,
            }}
          >
            View Details
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => deleteTour(item.id)}
            sx={{
              backgroundColor: "red",
              color: "white",
              marginLeft: "10px",
              fontWeight: 600,
              border: "none",
            }}
          >
            Delete
          </Button>
          <Button
            sx={{
              mt: 1,
              backgroundColor: "#0000FF",
              color: "white",
              fontWeight: 600,
              border: "none",
            }}
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
