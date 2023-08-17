// import { async } from "q";
import React, {
  createContext,
  useContext,
  // useEffect,
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
  likes: 0,
  isLiked: false,
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
    case "likes":
      return { ...state, likes: action.payload };

    case "isLiked":
      return { ...state, isLiked: action.payload };

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

      dispatch({
        type: "likes",
        payload: data["quantity of likes"],
      });

      dispatch({
        type: "isLiked",
        payload: data.is_liked,
      });

      console.log(data);
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

      console.log(data);

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
      console.log(data);
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

  const [comments, setComments] = useState([]);

  async function getComments(id) {
    try {
      const { data } = await $axios.get(`${BASE_URL}/post/${id}/comment/`);
      setComments(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function createComments(id, newComment) {
    try {
      await $axios.post(`${BASE_URL}/post/${id}/comment/`, newComment);
      getComments(id);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteComments(id) {
    try {
      await $axios.delete(`${BASE_URL}/post/${id}/comment/`);
      getHotel();
    } catch (e) {
      console.log(e);
    }
  }

  async function like(title, id) {
    try {
      const { data } = await $axios.post(`${BASE_URL}/post/${id}/like/`, title);
      getTour();
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
    comments,
    getComments,
    createComments,
    deleteComments,
    like,
  };
  return (
    <productContexts.Provider value={value}>
      {children}
    </productContexts.Provider>
  );
};

export default ProductContext;
