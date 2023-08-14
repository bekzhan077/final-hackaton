import React, { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";

const DetailPage = ({ item }) => {
  const { getProducts2 } = useProductContext();
  useEffect(() => {
    getProducts2();
  }, []);
  return <div className="detail_card">{item}</div>;
};

export default DetailPage;
