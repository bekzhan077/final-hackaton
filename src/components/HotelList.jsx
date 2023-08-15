import React, { useEffect } from "react";
import HotelItem from "./HotelItem";
import { useProductContext } from "../contexts/ProductContext";

const HotelList = () => {
  const { getHotel, products } = useProductContext();
  useEffect(() => {
    getHotel();
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
      {console.log(products, "products")}
      {products.length > 0
        ? products.map((item) => <HotelItem key={item.id} item={item} />)
        : ""}
    </div>
  );
};

export default HotelList;
