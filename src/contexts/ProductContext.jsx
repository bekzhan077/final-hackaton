import { async } from "q";
import React, { createContext, useContext, useReducer, useState } from "react";
import $axios from "../utils/axios";

import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../utils/consts";

const productContexts = createContext();

export function useProductContext() {
  return useContext(productContexts);
}

const initState = {
  products: [],
  products2: [],
  product: null,
  categories: [],
  totalPages: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "products2":
      return { ...state, products2: action.payload };
    case "oneProducts":
      return { ...state, oneProducts: action.payload };
    case "categories":
      return { ...state, categories: action.payload };
    case "totalPages":
      return { ...state, totalPages: action.payload };

    default:
      return state;
  }
}

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("page") || 1);

  async function getProducts1() {
    try {
      const { data } =
        await $axios.get(`${BASE_URL}/post/${window.location.search}&category=2
      `);

      const totalCount = Math.ceil(data.count / 10);
      console.log(totalCount);
      console.log(window.location.search);
      dispatch({
        type: "totalPages",
        payload: totalCount,
      });

      dispatch({
        type: "products",
        payload: data.results,
      });
    } catch (e) {
      console.log(e);
      console.log(window.location.search);
    }
  }

  async function getProducts2() {
    try {
      const { data } = await $axios.get(
        `${BASE_URL}/post/${window.location.search}&category=3`
      );

      const totalCount = Math.ceil(data.count / 10);
      console.log(data.count);

      dispatch({
        type: "totalPages",
        payload: totalCount,
      });

      dispatch({
        type: "products2",
        payload: data.results,
      });
    } catch (e) {
      console.log(e);
      console.log(window.location.search);
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
      dispatch({
        type: "categories",
        payload: data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const value = {
    products: state.products,
    products2: state.products2,
    oneProducts: state.oneProducts,
    categories: state.categories,
    totalPages: state.totalPages,
    page,
    setPage,
    getCategories,
    getProducts1,
    getProducts2,
    createProducts,
  };
  return (
    <productContexts.Provider value={value}>
      {children}
    </productContexts.Provider>
  );
};

export default ProductContext;
