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
          onChange={e => onChangeEach(e, id)}
          checked={checkList.includes(id)}
        />
      </label>
      <img alt={name} src={img} className="cart-item-img" />
      <span className="cart-item-name">{name}</span>
      <span className="cart-item-serial">serial number</span>
      <span className="cart-item-price">{priceTrans} 원</span>
      <div className="cart-count-button">
        {/* - 버튼 클릭 시  백엔드로 patch 요청*/}
        <button type="button">
          <AiOutlineMinus />
        </button>
        {/* 숫자 값 전달할 시 post 요청 */}
        <label>
          <input type="number" min="1" max="100" value={count} />
        </label>
        {/* + 버튼 클릭 시 백엔드로 patch 요청 */}
        <button type="button">
          <AiOutlinePlus />
        </button>
      </div>
      {/* delete 클릭시 백엔드로 해당 cartId 전달 후 삭제 요청 */}
      <i className="cart-item-delete">
        <FiTrash2 />
      </i>
    </li>
  );
};

export default CartItem;
