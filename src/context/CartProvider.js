import React, { useEffect, useState } from "react";
import JSONData from "../data/data.json";

export const CartContext = React.createContext({
  cart: [],
  increaseItemQty: () => {},
  decreaseItemQty: () => {},
  removeItem: () => {},
  resetCart: () => {},
});

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    } else {
      const cart = JSONData.Data.map((item) => ({ ...item, quantity: 1 }));
      setCart(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, []);

  const onIncreaseItemQty = (id) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart[itemIndex].quantity++;
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const ondecreaseItemQty = (id) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    if (itemIndex !== -1) {
      if (cart[itemIndex].quantity > 1) {
        const newCart = [...cart];
        newCart[itemIndex].quantity--;
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        onRemoveItem(id);
      }
    }
  };

  const onRemoveItem = (id) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const onresetCart = () => {
    const cart = JSONData.Data.map((item) => ({ ...item, quantity: 1 }));
    setCart(cart);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const cartContext = {
    cart,
    increaseItemQty: onIncreaseItemQty,
    decreaseItemQty: ondecreaseItemQty,
    removeItem: onRemoveItem,
    resetCart: onresetCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
