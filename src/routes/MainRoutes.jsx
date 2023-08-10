import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ActivationPage from "../pages/ActivationPage";
import AboutUsPage from "../pages/AboutUsPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/api/account/activate/" element={<ActivationPage />} />
    </Routes>
  );
};

export default MainRoutes;
