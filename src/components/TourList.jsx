import React, { useEffect } from "react";
import TourItem from "./TourItem";
import { useProductContext } from "../contexts/ProductContext";

const TourList = () => {
  const { getTour, products } = useProductContext();
  useEffect(() => {
    getTour();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="wrapper"
    >
      {products.map((item) => (
        <TourItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TourList;
