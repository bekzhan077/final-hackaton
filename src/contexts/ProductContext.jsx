import { async } from "q";
import React, { createContext, useContext, useReducer } from "react";
import $axios from "../utils/axios";
import { BASE_URL } from "../utils/consts";

const productContexts = createContext();

export function useProductContext() {
  return useContext(productContexts);
}

const initState = {
  products: [],
  product: null,
  categories: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "oneProducts":
      return { ...state, oneProducts: action.payload };
    case "categories":
      return { ...state, categories: action.payload };

    default:
      return state;
  }
}

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getProducts() {
    try {
      const { data } = await $axios.get(`${BASE_URL}/post/?category=3`);
      console.log(data.results, "products context");
      dispatch({
        type: "products",
        payload: data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function getTour() {
    try {
      const { data } = await $axios.get(`${BASE_URL}/post/?category=2`);
      console.log(data, "posts");
      dispatch({
        type: "products",
        payload: data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }
  async function getHotel() {
    try {
      const { data } = await $axios.get(`${BASE_URL}/post/?category=2`);
      console.log(data, "posts");
      dispatch({
        type: "products",
        payload: data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function createProducts(product) {
    try {
      console.log(product);
      const { data } = await $axios.post(`${BASE_URL}/post/`, product);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function getCategories() {
    try {
      const { data } = await $axios.get(`${BASE_URL}/category/`);
      console.log(data, ":data");
      dispatch({
        type: "categories",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const value = {
    products: state.products,
    oneProducts: state.oneProducts,
    categories: state.categories,
    getCategories,
    getProducts,
    getTour,
    getHotel,
    createProducts,
  };
  return (
    <productContexts.Provider value={value}>
      {children}
    </productContexts.Provider>
  );
};

export default ProductContext;
