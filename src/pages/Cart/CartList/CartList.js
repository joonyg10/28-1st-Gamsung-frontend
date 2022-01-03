import React from "react";
import "./CartList.scss";

const CartList = () => {
  return (
    <section className="cart-list">
      <h1>장바구니</h1>
      <div className="cart-list-inner">
        <label>
          <input type="checkbox" placeholder="전체 선택" value="all" />
          전체 선택
        </label>
        <button type="button">선택 삭제</button>
      </div>
    </section>
  );
};

export default CartList;
