import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const TotalPrice = () => {
  const { cart } = useContext(CartContext);

  let totalItemsCount = 0;

  cart.forEach((cartItem) => (totalItemsCount += cartItem.quantity));

  return (
    <div className="totalprice">
      <h3 className="totalprice-heading">Total</h3>
      <div className="totalprice-sub-container">
        <p>Items({totalItemsCount}):</p>
        <p>${}</p>
      </div>
      <div className="totalprice-sub-container">
        <p>Discount:</p>
        <p>${}</p>
      </div>
      <div className="totalprice-sub-container">
        <p>Type discount:</p>
        <p>${}</p>
      </div>
      <div className="totalprice-sub-container">
        <p>Order total</p>
        <p>${}</p>
      </div>
    </div>
  );
};

export default TotalPrice;
