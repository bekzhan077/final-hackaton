import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import axios from "axios";
import "../styles/CommentsStyle.css";

const HotelDetailPage = () => {
  const { id } = useParams();
  const { getComments, comments, createComments, deleteComments, getHotel } =
    useProductContext();
  const [comImp, setComImp] = useState("");

  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    getComments(id);
  }, []);
  console.log(comments);

  useEffect(() => {
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

  console.log(itemData);

  return (
    <div className="hotel-detail-container">
      <h1 className="hotel-title">{itemData.title}</h1>
      <h2 className="hotel-price">{itemData.price}</h2>
      <p className="hotel-body">{itemData.body}</p>

      <div className="images-container">
        {itemData.images.map((image) => (
          <img
            key={image.id}
            src={image.image}
            alt={image.title}
            className="hotel-image"
          />
        ))}
      </div>
      <div className="comment-input-section">
        <input
          value={comImp}
          onChange={(e) => setComImp(e.target.value)}
          className="comment-input"
        />
        <button
          onClick={() => {
            createComments(id, { body: comImp });
            setComImp("");
          }}
          className="comment-button"
        >
          Leave Comment
        </button>
      </div>
      <div>
        Comment:
        {comments.map((item) => (
          <div key={item.id}>
            <p> {item.body}</p>
            <h2 style={{ backgroundColor: "black" }}>{item.owner_username}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelDetailPage;
