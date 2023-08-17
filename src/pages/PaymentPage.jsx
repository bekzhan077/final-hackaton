import React from "react";
import "../styles/Payment.css";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <form class="form">
        <p class="title">KAYAKTA </p>
        <div class="flex">
          <label>
            <input class="input" type="text" placeholder="" required="" />
            <span>Firstname</span>
          </label>

          <label>
            <input class="input" type="text" placeholder="" required="" />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input class="input" type="email" placeholder="" required="" />
          <span>Email</span>
        </label>

        <label>
          <input class="input" type="password" placeholder="" required="" />
          <span>Password</span>
        </label>
        <label>
          <input class="input" type="number" placeholder="" required="" />
          <span>Support Us</span>
        </label>

        <button class="submit">
          <a
            style={{ textDecoration: "none" }}
            href="https://www.donationalerts.com/r/uwu_girl_2012_xxx"
          >
            Submit
          </a>
        </button>

        <p class="signin">
          <a href="/home">Home</a>
        </p>
      </form>
    </div>
  );
};

export default PaymentPage;
