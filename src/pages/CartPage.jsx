import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const CartPage = () => {
  return (
    <Box>
      <Header />
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
    </Box>
  );
};

export default CartPage;
