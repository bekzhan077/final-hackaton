import { Box } from "@mui/material";
import React from "react";
import "../styles/TourItem.css";

const HotelItem = () => {
  return (
    <Box
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div className="tour_card">
        <img
          className="tour_card__image1"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/e5/6b/70/exterior.jpg?w=1200&h=-1&s=1"
          alt="Tour 1"
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Hotel name</p>
          <p className="tour_card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className="tour_card__button" href="#">
            Read More
          </a>
        </div>
      </div>
      <div className="tour_card">
        <img
          className="tour_card__image2"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/e5/6b/70/exterior.jpg?w=1200&h=-1&s=1"
          alt="Tour 1"
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Hotel name</p>
          <p className="tour_card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className="tour_card__button" href="#">
            Read More
          </a>
        </div>
      </div>
      <div className="tour_card">
        <img
          className="tour_card__image3"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/e5/6b/70/exterior.jpg?w=1200&h=-1&s=1"
          alt="Tour 1"
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Hotel name</p>
          <p className="tour_card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className="tour_card__button" href="#">
            Read More
          </a>
        </div>
      </div>
      <div className="tour_card">
        <img
          className="tour_card__image4"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/e5/6b/70/exterior.jpg?w=1200&h=-1&s=1"
          alt=""
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Hotel name</p>
          <p className="tour_card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className="tour_card__button" href="#">
            Read More
          </a>
        </div>
      </div>
      <div className="tour_card">
        <img
          className="tour_card__image5"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/e5/6b/70/exterior.jpg?w=1200&h=-1&s=1"
          alt=""
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Hotel name</p>
          <p className="tour_card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className="tour_card__button" href="#">
            Read More
          </a>
        </div>
      </div>
      <div className="tour_card">
        <img
          className="tour_card__image6"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/e5/6b/70/exterior.jpg?w=1200&h=-1&s=1"
          alt=""
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Hotel name</p>
          <p className="tour_card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            className="tour_card__button"
            href="#"
            style={{ backgroundColor: "red", color: "black" }}
          >
            Read More
          </a>
        </div>
      </div>
    </Box>
  );
};

export default HotelItem;
