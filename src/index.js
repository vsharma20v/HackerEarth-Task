import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartProvider from "./context/CartProvider";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
