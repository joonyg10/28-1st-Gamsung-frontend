import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./CartItem.scss";
import { useState } from "react/cjs/react.development";

const CartItem = ({
  id,
  product_id: productId,
  name,
  price,
  serial,
  img,
  quantity,
  isSelected,
  handleCount,
  handleSelectItem,
  itemDelete,
}) => {
  const priceNum = price * quantity;
  const priceTrans = priceNum.toLocaleString("ko-KR");

  return (
    <li className="cart-item">
      <label className="cart-item-checkbox">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => handleSelectItem(productId)}
        />
      </label>
      <img alt={name} src={img} className="cart-item-img" />
      <span className="cart-item-name">{name}</span>
      <span className="cart-item-serial">{serial}</span>
      <span className="cart-item-price">{priceTrans} 원</span>
      <div className="cart-count-button">
        <button
          type="button"
          onClick={() => handleCount({ action: "decrease", productId: id })}
        >
          <AiOutlineMinus />
        </button>
        <label>
          <input
            type="number"
            min="1"
            max="100"
            value={quantity}
            // onChange={e => setCount(e.target.value)}
            // onKeyPress={e => {
            //   return (
            //     e.key === "Enter" &&
            //     handleCount({ action: "modify", productId: id, count })
            //   );
            // }}
          />
        </label>
        <button
          type="button"
          onClick={() => handleCount({ action: "increase", productId: id })}
        >
          <AiOutlinePlus />
        </button>
      </div>
      <i className="cart-item-delete" onClick={() => itemDelete(id)}>
        <FiTrash2 />
      </i>
    </li>
  );
};

export default CartItem;
