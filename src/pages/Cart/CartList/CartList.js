import React from "react";
import CartItem from "./CartItem/CartItem";
import "./CartList.scss";

const CartList = ({
  items,
  checkList,
  shopList,
  onChangeAll,
  onChangeEach,
  itemIncrease,
  itemDecrease,
  itemDelete,
  setItemCount,
}) => {
  const isCheck = checkList.length !== 0;

  return (
    <section className="cart-list">
      <h1>장바구니</h1>
      <div className="cart-list-select">
        <label>
          <input
            type="checkbox"
            placeholder="전체 선택"
            onChange={onChangeAll}
            checked={checkList.length === shopList.length}
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
                  id={item.product_id}
                  name={item.product_name}
                  price={item.price}
                  quantity={item.quantity}
                  img={item.main_url}
                  serial={item.serial_number}
                  checkList={checkList}
                  onChangeEach={onChangeEach}
                  itemIncrease={itemIncrease}
                  itemDecrease={itemDecrease}
                  itemDelete={itemDelete}
                  setItemCount={setItemCount}
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
