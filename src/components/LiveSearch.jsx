import { InputBase, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";

const LiveSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { setPage } = useProductContext();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }

    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      search,
    });
    setPage(1);
  }, [search]);

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "90",
      },
      [theme.breakpoints.up("sx")]: {
        width: "70%",
      },
    },
  }));

  return (
    <input
      style={{
        // color: "inherit",
        position: "absolute",
        top: 0,
        zIndex: 1000,
        background: "none",
        padding: "10px",
        width: "50%", // Увеличиваем ширину на 10% от ширины экрана
        left: "50%", // Центрируем на маленьких экранах
        transform: "translateX(-50%)", // Центрируем на маленьких экранах
        margin: "10px auto",
        borderRadius: "100px 10px 100px 10px",
        border: "1px solid black",
        "&::placeholder": {
          color: "blue", // Цвет для подсказки
          opacity: 1, // Опционально: делаем подсказку непрозрачной
        },
      }}
      placeholder="Search…"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default LiveSearch;
