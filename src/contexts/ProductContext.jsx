import { async } from "q";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import $axios from "../utils/axios";

import { useNavigate, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../utils/consts";

const productContexts = createContext();

export function useProductContext() {
  return useContext(productContexts);
}

const initState = {
  products: [],
  products2: [],
  product: null,
  tour: null,
  hotel: null,
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
    case "tour":
      return { ...state, tour: action.payload };
    case "hotel":
      return { ...state, hotel: action.payload };
    default:
      return state;
  }
}

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("page") || 1);

  async function getTour() {
    try {
      const { data } = await $axios.get(
        `${BASE_URL}/post/${window.location.search}&category=2`
      );

      const totalCount = Math.ceil(data.count / 10);

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
    }
  }

  async function getHotel() {
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
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteTour(id) {
    try {
      await $axios.delete(`${BASE_URL}/post/${id}/`);
      getTour();
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteHotel(id) {
    try {
      await $axios.delete(`${BASE_URL}/post/${id}/`);
      getHotel();
    } catch (e) {
      console.log(e);
    }
  }

  async function getOneTour(id) {
    try {
      const { data } = await $axios.get(`${BASE_URL}/post/${id}/`);
      dispatch({
        type: "tour",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function getOneHotel(id) {
    try {
      const { data } = await $axios.get(`${BASE_URL}/post/${id}/`);
      dispatch({
        type: "hotel",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const navigate = useNavigate();

  async function editTour(id, newTour) {
    console.log([...newTour]);
    try {
      await $axios.patch(`${BASE_URL}/post/${id}/`, newTour);
      navigate("/tour");
    } catch (e) {
      console.log(e);
    }
  }

  async function editHotel(id, newHotel) {
    try {
      await $axios.patch(`${BASE_URL}/post/${id}/`, newHotel);
      navigate("/hotel");
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
    tour: state.tour,
    hotel: state.hotel,
    page,
    setPage,
    getCategories,
    getTour,
    getHotel,
    createProducts,
    getOneTour,
    getOneHotel,
    deleteTour,
    editTour,
    deleteHotel,
    editHotel,
  };
  return (
    <productContexts.Provider value={value}>
      {children}
    </productContexts.Provider>
  );
};

export default ProductContext;
