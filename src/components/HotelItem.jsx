import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import "../styles/TourItem.css";
import { useProductContext } from "../contexts/ProductContext";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useCartContext } from "../contexts/CartContext";

const HotelItem = ({ item, id }) => {
  const { getHotel, deleteHotel } = useProductContext();
  const { isAlreadyIsCart, addPostToCart, deleteDishFromCart } =
    useCartContext();

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
          <p className="tour_card__text">{item.price}</p>

          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={`/detail/${item.id}`}
          >
            View Details
          </Button>
          <button onClick={() => deleteHotel(item.id)}>Delete</button>
          <button onClick={() => navigate(`/hoteledit/${item.id}`)}>
            Edit
          </button>
          {isAlreadyIsCart(item.id) ? (
            <RemoveShoppingCartIcon
              onClick={() => deleteDishFromCart(item.id)}
            />
          ) : (
            <ShoppingCartIcon onClick={() => addPostToCart(item)} />
          )}
        </div>
      </div>
    </Box>
  );
};

export default HotelItem;
