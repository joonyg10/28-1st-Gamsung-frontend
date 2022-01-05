import React from "react";
import CartItem from "./CartItem/CartItem";
import "./CartList.scss";

const CartList = ({
  items,
  checkList,
  shopList,
  onChangeAll,
  onChangeEach,
}) => {
  return (
    <section className="cart-list">
      <h1>장바구니</h1>
      <div className="cart-list-select">
        <label>
          <input
            type="checkbox"
            placeholder="전체 선택"
            value="all"
            onClick={onChangeAll}
            checked={checkList.length === shopList.length}
            readOnly
          />
          전체 선택
        </label>
        <button type="button" className="cart-list-delete">
          선택 삭제
        </button>
      </div>
      <div className="cart-list-items">
        <ul>
          {items.map(item => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                count={item.count}
                img={item.img}
                checkList={checkList}
                onChangeEach={onChangeEach}
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
