import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const TotalPrice = () => {
  const { cart } = useContext(CartContext);

  let totalItemsCount = 0;
  let totalPrice = 0;
  let discount = 0;
  let typeDiscount = 0;
  let totalFinalPrice = 0;

  cart.forEach((cartItem) => {
    totalItemsCount += cartItem.quantity;
    totalPrice += cartItem.price * cartItem.quantity;
    discount += cartItem.price * cartItem.quantity * (cartItem.discount / 100);
    if (cartItem.type === "fiction")
      typeDiscount += cartItem.price * cartItem.quantity * (15 / 100);
  });

  totalFinalPrice = totalPrice - typeDiscount - discount;

  return (
    <div className="totalprice">
      <h3 className="totalprice-heading">Total</h3>
      <div className="totalprice-sub-container">
        <p>Items({totalItemsCount}):</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <div className="totalprice-sub-container">
        <p>Discount:</p>
        <p>-${discount.toFixed(2)}</p>
      </div>
      <div className="totalprice-sub-container">
        <p>Type discount:</p>
        <p>-${typeDiscount.toFixed(2)}</p>
      </div>
      <div className="totalprice-sub-container">
        <p>Order total</p>
        <p>${totalFinalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TotalPrice;
