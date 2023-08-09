import React from "react";
import "../components/Header.css";
import logo from "./img/icons8-bucking-horse-100.png";
const Header = () => {
  return (
    <div>
      {" "}
      <div className="navbar">
        <div className="navbar-left">
          <h1>KAYAKTA</h1>
          <img width={70} src={logo} alt="" />
        </div>
        <div className="navbar-right">
          <ul>
            <li>Home</li>
            <li>Tours</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
