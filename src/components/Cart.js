import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const { cart } = useContext(CartContext);

  let totalItemsCount = 0;

  cart.forEach((cartItem) => (totalItemsCount += cartItem.quantity));

  return (
    <div className="cart">
      <div className="cart-heading">
        <p>Items ({totalItemsCount})</p>
        <p>Qty</p>
        <p>Price</p>
      </div>
      <ul className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
