import React, { useEffect } from "react";
import CardList from "../components/CardList";
import { useProductContext } from "../contexts/ProductContext";

const HomePage = () => {
  const { getProducts, products } = useProductContext();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="wrapper">
      {products.map((item) => (
        <h1>{item.title}</h1>
      ))}
      <CardList />
    </div>
  );
};

export default HomePage;
