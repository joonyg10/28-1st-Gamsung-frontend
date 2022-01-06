import React from "react";
import CartItem from "./CartItem/CartItem";
import "./CartList.scss";

const CartList = ({
  items,
  handleCount,
  itemDelete,
  handleSelectItem,
  handleSelectedItemAll,
}) => {
  const isSelectedAll = items.every(item => item.isSelected);
  const isCheck = items.some(item => item.isSelected);

  return (
    <section className="cart-list">
      <h1>장바구니</h1>
      <div className="cart-list-select">
        <label>
          <input
            type="checkbox"
            placeholder="전체 선택"
            checked={isSelectedAll}
            onChange={e => {
              handleSelectedItemAll(e.target.checked);
            }}
          />
          전체 선택
        </label>
        <button
          type="button"
          className={`cart-list-delete ${isCheck ? "active" : ""}`}
          disabled={!isCheck}
        >
          선택 삭제
        </button>
      </div>
      <div className="cart-list-items">
        <ul>
          {items.length !== 0 ? (
            items.map(item => {
              return (
                <CartItem
                  key={item.product_id}
                  {...item}
                  handleSelectItem={handleSelectItem}
                  handleCount={handleCount}
                  itemDelete={itemDelete}
                />
              );
            })
          ) : (
            <li>장바구니 상품이 존재하지 않습니다.</li>
          )}
        </ul>
        <p>장바구니 상품은 30일간 보관됩니다.</p>
        <button>이벤트 등록하기</button>
      </div>
    </section>
  );
};

export default CartList;
