import React, { useEffect } from "react";
import CardList from "../components/CardList";
import { useProductContext } from "../contexts/ProductContext";

const HomePage = () => {
  return (
    <div className="wrapper">
      <CardList />
    </div>
  );
};

export default HomePage;
