import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContexts";
import LiveSearch from "../components/LiveSearch";

export default function PrimarySearchAppBar() {
  const { user, logout, isAdmin } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const livesearch = LiveSearch();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {!user ? (
        <MenuItem component={Link} to="/auth">
          Login
        </MenuItem>
      ) : (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            logout();
          }}
        >
          Logout
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {!user ? (
        <MenuItem component={Link} to="/auth">
          <p>Login</p>
        </MenuItem>
      ) : (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            logout();
          }}
        >
          <MenuItem onClick={() => navigate("/")}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Homepage</p>
          </MenuItem>
          <MenuItem onClick={() => navigate("/hotel")}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <NightShelterIcon />
              </Badge>
            </IconButton>
            <p>Hotels</p>
          </MenuItem>
          <MenuItem onClick={() => navigate("/tour")}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <ExploreIcon />
              </Badge>
            </IconButton>
            <p>Tours</p>
          </MenuItem>
          <MenuItem onClick={() => navigate("/home")}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <p>Favorite</p>
          </MenuItem>
          <p>Logout</p>
        </MenuItem>
      )}
      {!isAdmin ? (
        <MenuItem onClick={() => navigate("/add")}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <AddCircleIcon />
            </Badge>
          </IconButton>
          <p>Add</p>
        </MenuItem>
      ) : (
        ""
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage: "linear-gradient(163deg, #00ff75 0%, #3700ff 100%)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img
              onClick={() => navigate("/home")}
              style={{ width: "50px" }}
              src="https://freepngimg.com/thumb/sunrise/33996-5-sunrise-clipart-thumb.png"
              alt=""
            />
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {isAdmin() ? (
              <IconButton
                onClick={() => navigate("/add")}
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <AddCircleIcon />
                </Badge>
              </IconButton>
            ) : (
              ""
            )}

            <IconButton
              onClick={() => navigate("/favorites")}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              onClick={() => navigate("/tour")}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ExploreIcon />
              </Badge>
            </IconButton>

            <IconButton
              onClick={() => navigate("/hotel")}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <NightShelterIcon />
              </Badge>
            </IconButton>

            {!user ? (
              <MenuItem component={Link} to="/auth">
                Login
              </MenuItem>
            ) : (
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  logout();
                }}
              >
                Logout
              </MenuItem>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
