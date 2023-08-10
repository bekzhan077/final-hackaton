import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ActivationPage from "../pages/ActivationPage";
import ResetPassPage from "../pages/ResetPassPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/api/account/activate/" element={<ActivationPage />} />
      <Route
        path="/api/account/reset-password/confirm/"
        element={<ResetPassPage />}
      />
    </Routes>
  );
};

export default MainRoutes;
