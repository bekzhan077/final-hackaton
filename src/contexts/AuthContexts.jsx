import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { ADMINS, BASE_URL } from "../utils/consts";
import $axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { notify } from "../components/Toastify";

const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function register(credentials) {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/account/register/`,
        credentials
      );
      notify("Succes");
      console.log(res);
    } catch (e) {
      notify(e.code.split("/")[1], "error");
    }
  }

  async function login(credentials) {
    try {
      const { data: tokens } = await axios.post(
        `${BASE_URL}/api/account/login/`,
        credentials
      );
      localStorage.setItem("tokens", JSON.stringify(tokens));

      const { data } = await $axios.get(`${BASE_URL}/api/account/profile/`);

      setUser(data);

      notify("Succes");
    } catch (e) {
      notify(e.code.split("/")[1], "error");
    }
  }

  function logout() {
    localStorage.removeItem("tokens");
    setUser(null);
  }

  async function checkAuth() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      if (tokens) {
        const { data } = await $axios.get(`${BASE_URL}/api/account/profile/`);
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (e) {
      notify(e.code.split("/")[1], "error");
    }
  }

  async function activateUser(code) {
    try {
      const res = await axios.post(`${BASE_URL}/api/account/activate/`, {
        code,
      });

      notify("Succes");
      navigate("/auth");
    } catch (e) {
      notify(e.code.split("/")[1], "error");
    }
  }

  async function resetPassword(credentials) {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/account/reset-password/`,
        credentials
      );

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  async function confirmPassword(obj, code) {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/account/reset-password/confirm/?u=${code}`,
        obj
      );
      console.log(res);
      navigate("/auth");
    } catch (e) {
      console.log(e);
    }
  }

  function isAdmin() {
    if (!user) {
      return false;
    }

    return ADMINS.includes(user.email);
  }

  const value = {
    user,
    register,
    login,
    logout,
    checkAuth,
    activateUser,
    resetPassword,
    open,
    handleOpen,
    handleClose,
    confirmPassword,
    isAdmin,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
