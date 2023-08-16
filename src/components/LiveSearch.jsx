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
        width: "90%",
      },
    },
  }));

  return (
    <input
      style={{ position: "fixed", top: "30vh", right: "10px" }}
      placeholder="Search…"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default LiveSearch;
