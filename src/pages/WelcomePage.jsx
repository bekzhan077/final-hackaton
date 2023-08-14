import React from "react";
import video from "../assets/video.mp4";
import { Button } from "@mui/base";
import "../styles/WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="home">
      <div className="overplay">
        <video src={video} autoPlay loop muted />
      </div>

      <div className="content">
        <p>Welcome</p>
        <img
          src="https://freepngimg.com/thumb/sunrise/33996-5-sunrise-clipart-thumb.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default WelcomePage;
