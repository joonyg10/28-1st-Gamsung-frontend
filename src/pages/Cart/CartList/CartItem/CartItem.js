import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./CartItem.scss";
import { useState } from "react/cjs/react.development";

const CartItem = ({
  id,
  name,
  price,
  serial,
  img,
  quantity,
  checkList,
  onChangeEach,
  itemIncrease,
  itemDecrease,
  itemDelete,
  setItemCount,
}) => {
  const priceNum = price * quantity;
  const priceTrans = priceNum.toLocaleString("ko-KR");
  const [count, setCount] = useState(quantity);

  return (
    <li className="cart-item">
      <label className="cart-item-checkbox">
        <input
          type="checkbox"
          onChange={e => onChangeEach(e, id)}
          checked={checkList.includes(id)}
        />
      </label>
      <img alt={name} src={img} className="cart-item-img" />
      <span className="cart-item-name">{name}</span>
      <span className="cart-item-serial">{serial}</span>
      <span className="cart-item-price">{priceTrans} 원</span>
      <div className="cart-count-button">
        <button type="button" onClick={() => itemDecrease(id)}>
          <AiOutlineMinus />
        </button>
        <label>
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={e => setCount(e.target.value)}
            onKeyPress={e => {
              return e.key === "Enter" && setItemCount(id, count);
            }}
          />
        </label>
        <button type="button" onClick={() => itemIncrease(id)}>
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
