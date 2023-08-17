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
          <button onClick={() => deleteTour(item.id)}>Delte</button>
          <button onClick={() => navigate(`/touredit/${item.id}`)}>EDit</button>
        </div>
      </div>
    </Box>
  );
};

export default TourItem;
