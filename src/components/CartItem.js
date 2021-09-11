import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const CartItem = ({ item }) => {
  const { increaseItemQty, decreaseItemQty, removeItem } =
    useContext(CartContext);

  const increaseQtyHandler = () => increaseItemQty(item.id);

  const decreaseQtyHandler = () => decreaseItemQty(item.id);

  const deleteItemHandler = () => removeItem(item.id);

  return (
    <li className="cart-item" id={item.id}>
      <div className="cart-item-name-container">
        <img className="item-image" src={item.img_url} alt="Item" />
        <p className="item-name">{item.name}</p>
        <button onClick={deleteItemHandler} className="item-delete-btn">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
            <path
              d="M1 17L17 1M17 17L1 1"
              stroke="#2c2c2c"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>
      <div className="cart-item-qty-container">
        <button onClick={decreaseQtyHandler} className="item-qty-btn">
          -
        </button>
        <input
          value={item.quantity}
          readOnly={true}
          className="item-qty-input"
          type="text"
        />
        <button onClick={increaseQtyHandler} className="item-qty-btn">
          +
        </button>
      </div>
      <p className="item-price">${item.price}</p>
    </li>
  );
};

export default CartItem;
