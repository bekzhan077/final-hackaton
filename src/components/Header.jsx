import React from "react";
import "../components/Header.css";
import logo from "./img/icons8-bucking-horse-100.png";
import { useAuthContext } from "../contexts/AuthContexts";
import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <h1 style={{ marginTop: "16px" }}>KAYAKTA</h1>
          <img width={70} src={logo} alt="" />
        </div>
        <div className="navbar-right">
          <ul>
            <li>Home</li>
            <li>Tours</li>
            <li onClick={() => navigate("/aboutus")}>About Us</li>
            <li>Add Tourse</li>
            {user ? (
              <Box display="flex" alignItems="center" gap={1}>
                <Typography>{user.email}</Typography>
                <Button
                  sx={{
                    color: "red",
                    backgroundColor: "green",
                    borderRadius: "150px",
                    height: "50px",
                    width: "80px",
                  }}
                  onClick={logout}
                >
                  Logout
                </Button>
              </Box>
            ) : (
              <Button
                component={Link}
                to="/auth"
                sx={{
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: "150px",
                  height: "50px",
                  width: "80px",
                }}
              >
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
