import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";
import HotelList from "../components/HotelList";
import "../styles/HotelPage.css";
import axios from "axios";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";

const HotelPage = () => {
  const [hotelData, setHotelData] = useState([]);
  const { getHotel } = useProductContext();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getHotel();
  }, [searchParams]);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get(
          "https://app.kayakta.pp.ua/post/?category=3"
        );
        setHotelData(response.data.results);
      } catch (error) {
        console.error("Error fetching Hotel data:", error);
      }
    };

    fetchHotelData();
  }, []);

  return (
    <Box>
      <Header />
      <div
        style={{
          backgroundImage: `url("https://media.gadventures.com/media-server/dynamic/blogs/posts/dan-audrey/2017/07/kyBurn.jpg")`,
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
            fontSize: "6vw", // Используем относительную единицу измерения
            letterSpacing: "0.5vw", // Также используем относительную единицу для интервала
            fontFamily: "Shantell Sans",
            fontWeight: "normal",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          Choose where to sleep
        </p>
      </div>

      <HotelList hotelData={hotelData} />
      <Pagination />
    </Box>
  );
};

export default HotelPage;
