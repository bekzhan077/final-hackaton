import React, { createContext, useContext, useState } from "react";
import { notify } from "../components/Toastify";
import { useNavigate } from "react-router-dom";

const cartContext = createContext();

export function useCartContext() {
  return useContext(cartContext);
}

const initState = {
  tours: [],
  totalCount: 0,
};

function getDataFromLs() {
  let data = JSON.parse(localStorage.getItem("cart"));
  if (!data) {
    data = {
      tours: [],
      totalCount: 0,
    };
  }
  console.log(data);
  return data;
}

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(initState);

  function getCart() {
    const data = getDataFromLs();

    setCart(data);
  }

  function addPostToCart(tour, hotel) {
    // Получаем данные из localStorage
    const data = getDataFromLs();
    // Добавляем объект "tour" в массив "tours" в данных
    // Также добавляем новое свойство "subPrice" со значением "price" из "tour"
    data.tours.push({ ...tour, subPrice: tour.price });

    // Вычисляем общую стоимость корзины путем суммирования "subPrice" всех элементов
    data.totalPrice = data.tours.reduce((acc, item) => acc + item.subPrice, 0);

    // Сохраняем обновленные данные обратно в localStorage
    localStorage.setItem("cart", JSON.stringify(data));
    // Вызываем функцию getCart() (предположительно, обновление информации о корзине)
    getCart();
    // Выводим уведомление о успешном добавлении в корзину
    notify("Successfully added to cart");
  }

  function deleteDishFromCart(id) {
    // Получение данных из localStorage
    const data = getDataFromLs();
    // Фильтрация блюда с указанным id из массива блюд
    data.tours = data.tours.filter((item) => item.id !== id);

    // Расчет новой общей стоимости на основе оставшихся блюд
    data.totalPrice = data.tours.reduce((acc, item) => acc + item.subPrice, 0);

    // Обновление данных корзины в localStorage
    localStorage.setItem("cart", JSON.stringify(data));
    // Обновление отображения корзины на странице
    getCart();
    // Отправка уведомления о успешном удалении блюда
    notify("Successfully removed");
  }

  // Функция для проверки наличия блюда с заданным id в корзине
  function isAlreadyIsCart(id) {
    const data = getDataFromLs();

    const isInCart = data.tours.some((item) => item.id === id);

    return isInCart;
  }

  const navigate = useNavigate();

  function clearCart() {
    localStorage.removeItem("cart");
    getCart();
    navigate("/");
  }

  let value = {
    cart,
    getCart,
    addPostToCart,
    deleteDishFromCart,
    isAlreadyIsCart,
    clearCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContext;
