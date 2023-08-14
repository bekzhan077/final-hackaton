import React, { useEffect } from "react";
import TourItem from "./TourItem";
import { useProductContext } from "../contexts/ProductContext";

const TourList = () => {
  const { getProducts1, products } = useProductContext();
  useEffect(() => {
    getProducts1();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "row",
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
