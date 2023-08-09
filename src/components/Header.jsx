import React from "react";
import "../components/Header.css";
import logo from "./img/icons8-bucking-horse-100.png";
import { useAuthContext } from "../contexts/AuthContexts";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function Header() {
  const { user, logout } = useAuthContext();

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
            {user ? (
              <Box display="flex" alignItems="center" gap={1}>
                <Typography>{user.email}</Typography>
                <Button sx={{ color: "dark" }} onClick={logout}>
                  Logout
                </Button>
              </Box>
            ) : (
              <Button component={Link} to="/auth" sx={{ color: "dark" }}>
                Login
              </Button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
