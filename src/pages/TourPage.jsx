import React, { useEffect, useState } from "react";
import axios from "axios";
import TourList from "../components/TourList";
import { Box } from "@mui/material";
import Header from "../components/Header";

const TourPage = () => {
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get(
          "https://app.kayakta.pp.ua/post/?category=2"
        );
        setTourData(response.data.results);
      } catch (error) {
        console.error("Error fetching tour data:", error);
      }
    };

    fetchTourData();
  }, []);

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
          Choose your way
        </p>
      </div>
      <TourList tourData={tourData} />
    </Box>
  );
};

export default TourPage;
