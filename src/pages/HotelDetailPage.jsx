import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import axios from "axios";

const TourDetailPage = () => {
  const { id } = useParams();
  const { getTour } = useProductContext();
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    // Здесь выполняется запрос на сервер для получения данных о туре по его id
    axios
      .get(`https://app.kayakta.pp.ua/post/${id}/`)
      .then((response) => {
        setItemData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tour data:", error);
      });
  }, [id]);

  if (!itemData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{itemData.title}</h1>
      <h2>{itemData.price}</h2>
      <p>{itemData.body}</p>

      <div className="images-container">
        {itemData.images.map((image) => (
          <img key={image.id} src={image.image} alt={image.title} />
        ))}
      </div>
    </div>
  );
};

export default TourDetailPage;
