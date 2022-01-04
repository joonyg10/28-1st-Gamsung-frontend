import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./CartOrderAddress.scss";

const CartOrderAddress = () => {
  return (
    <div className="cart-order-address">
      <i>
        <AiOutlineInfoCircle />
      </i>
      <p>배송지를 등록해 주세요.</p>
      <button type="button">배송지 등록</button>
    </div>
  );
};

export default CartOrderAddress;
