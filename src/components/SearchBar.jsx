import { InputBase, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";

const SearchBar = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  position: "fixed", // Закрепляем позицию
  top: 0,
  right: 10,
  zIndex: 1000,
  background: "green",
  width: "100%", // Занимает всю ширину
  [theme.breakpoints.up("sm")]: {
    width: "auto", // При больших экранах адаптивно
  },
}));

const LiveSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setPage } = useProductContext();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      search,
    });
    setPage(1);
  }, [search]);

  return (
    <SearchBar
      placeholder="Search…"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default LiveSearch;
