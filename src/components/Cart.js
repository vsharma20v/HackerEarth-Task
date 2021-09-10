import { useState } from "react";
import Data from "../data/data";
import Item from "./Item";

const Cart = () => {
  const [cartItems, setCartItems] = useState(Data);
  return (
    <div className="cart">
      <div className="cart-heading">
        <p>Items ({cartItems.length})</p>
        <p>Qty</p>
        <p>Price</p>
      </div>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
