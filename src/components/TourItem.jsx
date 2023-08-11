import React from "react";
import "../styles/TourItem.css";
import { Box } from "@mui/material";

const TourItem = () => {
  return (
    <Box
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div className="tour_card">
        <img
          className="tour_card__image1"
          src="https://www.datocms-assets.com/55179/1647369689-unnamed-file.jpg"
          alt="Tour 1"
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Tour name</p>
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
          src="https://www.datocms-assets.com/55179/1647369689-unnamed-file.jpg"
          alt="Tour 1"
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Tour name</p>
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
          src="https://www.datocms-assets.com/55179/1647369689-unnamed-file.jpg"
          alt="Tour 1"
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Tour name</p>
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
          src="https://nomads-dream.kg/files/images/main.jpg"
          alt=""
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Tour name</p>
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
          src="https://live.staticflickr.com/5054/5519630776_05bf7763fc_b.jpg"
          alt=""
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Tour name</p>
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
          src="https://live.staticflickr.com/5054/5519630776_05bf7763fc_b.jpg"
          alt=""
        />
        <div className="tour_card__content">
          <p className="tour_card__title">Tour name</p>
          <p className="tour_card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className="tour_card__button" href="#">
            Read More
          </a>
        </div>
      </div>
    </Box>
  );
};

export default TourItem;
