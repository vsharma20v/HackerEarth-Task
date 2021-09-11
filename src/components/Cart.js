import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Cart = ({ onShowAlert }) => {
  const { cart, resetCart } = useContext(CartContext);

  let totalItemsCount = 0;

  cart.forEach((cartItem) => (totalItemsCount += cartItem.quantity));

  const resetItemsHandler = () => resetCart();

  return (
    <div className="cart">
      <div className="cart-heading">
        <p>Items ({totalItemsCount})</p>
        <p>Qty</p>
        <p>Price</p>
      </div>
      {cart.length > 0 ? (
        <ul className="cart-items">
          {cart.map((item) => (
            <CartItem onShowAlert={onShowAlert} key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <button onClick={resetItemsHandler} className="cart-reset-btn">
          Reset Items
        </button>
      )}
    </div>
  );
};

export default Cart;
