import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./CartItem.scss";

const CartItem = ({ name, price, img }) => {
  const [itemCount, setItemCount] = useState(1);

  const priceText = (price * itemCount).toLocaleString("ko-KR");

  return (
    <li className="cart-item">
      <label className="cart-item-checkbox">
        <input type="checkbox" />
      </label>
      <img alt={name} src={img} className="cart-item-img" />
      <span className="cart-item-name">{name}</span>
      <span className="cart-item-serial">serial number</span>
      <span className="cart-item-price">{priceText}원</span>
      <div className="cart-count-button">
        <button type="button" onClick={() => setItemCount(itemCount - 1)}>
          <AiOutlineMinus />
        </button>
        <label>
          <input
            type="number"
            min="1"
            max="100"
            value={itemCount}
            onChange={e => setItemCount(e.target.value)}
          />
        </label>
        <button type="button" onClick={() => setItemCount(itemCount + 1)}>
          <AiOutlinePlus />
        </button>
      </div>
      <i className="cart-item-delete">
        <FiTrash2 />
      </i>
    </li>
  );
};

export default CartItem;
