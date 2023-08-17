import React from "react";
import video from "../assets/video.mp4";
import "../styles/WelcomePage.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <br />
        <p>To the best </p>
        <Button
          sx={{
            variant: "outlined",
            fontFamily: "Shantell Sans",
            fontSize: "29px",
          }}
          onClick={() => navigate("/home")}
        >
          trip
        </Button>
        <p>of your life</p>
      </div>
    </div>
  );
};

export default WelcomePage;
