import { useState } from "react";

const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <li className="cart-item" id={item.id}>
      <div className="cart-item-name-container">
        <img className="item-image" src={item.img_url} alt="Item" />
        <p className="item-name">{item.name}</p>
        <button className="item-delete-btn">
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
        <button className="item-qty-btn">-</button>
        <input value={quantity} readOnly className="item-qty-input" type="text" />
        <button className="item-qty-btn">+</button>
      </div>
      <p className="item-price">${item.price}</p>
    </li>
  );
};

export default Item;
