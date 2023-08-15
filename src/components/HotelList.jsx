import React, { useEffect } from "react";
import HotelItem from "./HotelItem";

import { useProductContext } from "../contexts/ProductContext";

const HotelList = () => {
  const { getProducts2, products2 } = useProductContext();
  useEffect(() => {
    getProducts2();
  }, []);
  console.log(products2);

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
      {products2?.map((item) => (
        <HotelItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HotelList;
