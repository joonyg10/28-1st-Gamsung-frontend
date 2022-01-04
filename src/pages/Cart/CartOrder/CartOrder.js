import React from "react";
import CartOrderMenu from "./CartOrderMenu/CartOrderMenu";
import CartOrderAddress from "./CartOrderAddress/CartOrderAddress";
import "./CartOrder.scss";

const CartOrder = () => {
  return (
    <section className="cart-order">
      <CartOrderAddress />
      <div className="cart-order-total">
        {ORDER_MENU.map(menu => {
          return (
            <CartOrderMenu
              key={menu.name}
              name={menu.name}
              number={menu.number}
            />
          );
        })}
      </div>
      <div className="cart-order-buyprice">
        <span>결제 예정 금액</span>
        {/* Cart 에서 shopList 상태 값을 받아와서 전달 */}
        <span>{ORDER_MENU[1].number}</span>
      </div>
      <button className="cart-order-button">주문하기</button>
    </section>
  );
};

const ORDER_MENU = [
  {
    name: "전체 상품",
    number: "2 개",
  },
  {
    name: "주문 금액",
    number: "3,100,000 원",
  },
  {
    name: "할인 금액",
    number: "0 원",
  },
];

export default CartOrder;
