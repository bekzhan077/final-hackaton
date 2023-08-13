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
import AddTourPage from "../pages/AddTourPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/add" element={<AddTourPage />} />
      </Route>
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
