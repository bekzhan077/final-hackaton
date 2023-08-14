import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";
import HotelList from "../components/HotelList";

const HotelPage = () => {
  return (
    <Box>
      <Header />
      <div
        style={{
          backgroundImage: `url("https://media.gadventures.com/media-server/dynamic/blogs/posts/dan-audrey/2017/07/kyBurn.jpg")`,
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
            transform: "translate(-100%, -50%)", // Центрируем текст точно
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
          Choose where to sleep
        </p>
      </div>
      <HotelList />
    </Box>
  );
};

export default HotelPage;
