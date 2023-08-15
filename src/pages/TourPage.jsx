import React, { useEffect } from "react";
import TourList from "../components/TourList";
import { Box } from "@mui/material";
import Header from "../components/Header";
import "../styles/TourPage.css";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import { useProductContext } from "../contexts/ProductContext";

const TourPage = () => {
  const { getProducts1 } = useProductContext();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getProducts1();
  }, [searchParams]);
  return (
    <Box>
      <Header />

      <div
        style={{
          backgroundImage: `url("https://cdn.suwalls.com/wallpapers/nature/caravansary-on-silk-road-in-kyrgyzstan-41123-1920x1200.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // Чтобы задний фон занимал всю высоту экрана
        }}
      >
        <p
          style={{
            position: "absolute", // Устанавливаем абсолютное позиционирование для текста
            top: "50%", // Располагаем текст вертикально по центру
            left: "50%", // Располагаем текст горизонтально по центру
            transform: "translate(-50%, -50%)", // Центрируем текст точно
            color: "white", // Устанавливаем цвет текста
            fontSize: "100px", // Размер шрифта
            letterSpacing: "10px",
            fontFamily: "Shantell Sans",
            fontWeight: "normal",
            color: "white", // Цвет текста
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            textAlign: "center", //
          }}
        >
          Choose your way
        </p>
      </div>

      <TourList />
      <Pagination />
    </Box>
  );
};

export default TourPage;
