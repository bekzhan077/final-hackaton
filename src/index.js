import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./contexts/ProductContext";
import AuthContext from "./contexts/AuthContexts";
import "react-toastify/dist/ReactToastify.css";
import Toastify from "./components/Toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <ProductContext>
        <Toastify />
        <App />
      </ProductContext>
    </AuthContext>
  </BrowserRouter>
);
