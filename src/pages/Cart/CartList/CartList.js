import React, { useState } from "react";
import CartItem from "./CartItem/CartItem";
import "./CartList.scss";

const CartList = ({ items }) => {
  const [itemCheck, setItemCheck] = useState(false);

  return (
    <section className="cart-list">
      <h1>장바구니</h1>
      <div className="cart-list-select">
        <label>
          <input
            type="checkbox"
            placeholder="전체 선택"
            value="all"
            onClick={() => setItemCheck(preCheck => !preCheck)}
          />
          전체 선택
        </label>
        <button
          type="button"
          className={`cart-list-delete ${itemCheck ? "active" : ""}`}
          disabled={!itemCheck}
        >
          선택 삭제
        </button>
      </div>
      <div className="cart-list-items">
        <ul>
          {items.map(item => {
            return (
              <CartItem
                key={item.name}
                name={item.name}
                price={item.price}
                img={item.img}
              />
            );
          })}
        </ul>
        <p>장바구니 상품은 30일간 보관됩니다.</p>
        <button>이벤트 등록하기</button>
      </div>
    </section>
  );
};

export default CartList;
