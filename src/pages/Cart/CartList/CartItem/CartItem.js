import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./CartItem.scss";

const CartItem = ({ id, name, price, img, count, checkList, onChangeEach }) => {
  const priceNum = price * count;
  const priceTrans = priceNum.toLocaleString("ko-KR");

  return (
    <li className="cart-item">
      <label className="cart-item-checkbox">
        {/* input check 가 true 일 때 가격과 갯수를 부모 컴포넌트에게 넘긴다. */}
        <input
          type="checkbox"
          onClick={e => onChangeEach(e, id)}
          checked={checkList.includes(id)}
          readOnly
        />
      </label>
      <img alt={name} src={img} className="cart-item-img" />
      <span className="cart-item-name">{name}</span>
      <span className="cart-item-serial">serial number</span>
      <span className="cart-item-price">{priceTrans} 원</span>
      <div className="cart-count-button">
        <button type="button">
          <AiOutlineMinus />
        </button>
        <label>
          <input type="number" min="1" max="100" value={count} />
        </label>
        <button type="button">
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
