import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ActivationPage from "../pages/ActivationPage";
import TourPage from "../pages/TourPage";
import HotelPage from "../pages/HotelPage";
import ResetPassPage from "../pages/ResetPassPage";
import AboutUsPage from "../pages/AboutUsPage";
import WelcomePage from "../pages/WelcomePage";
import AddTourPage from "../pages/AddTourPage";
import TourDetailPage from "../pages/TourDetailPage";
import HotelDetailPage from "../pages/HotelDetailPage";
import EditTourPage from "../pages/EditTourPage";
import EditHotelPage from "../pages/EditHotelPage";
import CartPage from "./../pages/CartPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/add" element={<AddTourPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/detail/:id" element={<TourDetailPage />} />
        <Route path="/hotel/:id" element={<HotelDetailPage />} />
        <Route path="/touredit/:id" element={<EditTourPage />} />
        <Route path="/hoteledit/:id" element={<EditHotelPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/hotel" element={<HotelPage />} />
      <Route path="/tour" element={<TourPage />} />
      <Route path="/api/account/activate/" element={<ActivationPage />} />
      <Route
        path="/api/account/reset-password/confirm/"
        element={<ResetPassPage />}
      />
    </Routes>
  );
};

export default MainRoutes;
