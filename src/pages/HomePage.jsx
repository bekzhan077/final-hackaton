import React, { useEffect } from "react";
import CardList from "../components/CardList";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <CardList />
    </div>
  );
};

export default HomePage;
