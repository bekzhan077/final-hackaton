import React, { useEffect } from "react";
import { useCartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

const CartPage = () => {
  const { cart, getCart, deleteDishFromCart, clearCart } = useCartContext();
  const navigate = useNavigate();
  useEffect(() => {
    getCart();
  }, []);

  if (cart.tours.length < 1) {
    return (
      <Box
        sx={{
          maxWidth: "max-content",
          margin: "100px auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Cart is empty</Typography>
        <Button component={Link} to="/menu">
          Go to menu
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <div
        style={{
          backgroundImage: `url("https://cdn.suwalls.com/wallpapers/nature/caravansary-on-silk-road-in-kyrgyzstan-41123-1920x1200.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "6vw",
            letterSpacing: "0.5vw",
            fontFamily: "Shantell Sans",
            fontWeight: "normal",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          This is what you buy
        </p>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Title</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Protein</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.tours.map((item, index) => {
              console.log(item);
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{ fontSize: "30px" }}
                    component="th"
                    scope="item"
                  >
                    {item.title}
                  </TableCell>
                  <TableCell align="right">
                    <img width={150} src={item.preview} alt="" />
                  </TableCell>
                  <TableCell sx={{ fontSize: "30px" }} align="right">
                    {item.category}
                  </TableCell>
                  <TableCell sx={{ fontSize: "30px" }} align="right">
                    {item.price}
                  </TableCell>
                  <TableCell sx={{ fontSize: "30px" }} align="right">
                    {item.subPrice}
                  </TableCell>

                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "25%",
                    }}
                  >
                    <IconButton onClick={() => deleteDishFromCart(item.id)}>
                      <RemoveIcon color="primary" />
                    </IconButton>
                    <Typography component={"span"} variant="h6">
                      {item.count}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 30px",
          }}
        >
          <Typography variant="h4">
            Total price: ${(+cart.totalPrice).toFixed(2)}
          </Typography>
          <Button
            sx={{
              backgroundImage:
                "linear-gradient(163deg, #00ff75 0%, #3700ff 100%)",
              width: "100px",
              height: "50px",
            }}
            component={Link}
            to="/home"
            variant="contained"
            onClick={() => {
              clearCart();
              navigate("/");
            }}
          >
            Order
          </Button>
        </Box>
      </TableContainer>
    </Box>
  );
};

export default CartPage;
