import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import "./CartItem.scss";

const CartItem = ({ name, price, img }) => {
  const [itemCount, setItemCount] = useState(1);

  return (
    <li className="cart-list-item">
      <label className="cart-item-checkbox">
        <input type="checkbox" />
      </label>
      <img alt={name} src={img} />
      <span>{name}</span>
      <span className="cart-item-price">{price}원</span>
      <div className="cart-count-button">
        <button type="button" onClick={() => setItemCount(itemCount - 1)}>
          -
        </button>
        <span>{itemCount}</span>
        <button type="button" onClick={() => setItemCount(itemCount + 1)}>
          +
        </button>
      </div>
      <i className="cart-item-delete">
        <FiTrash2 />
      </i>
    </li>
  );
};

export default CartItem;
