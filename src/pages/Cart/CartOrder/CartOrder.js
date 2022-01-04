import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import CartOrderMenu from "./CartOrderMenu/CartOrderMenu";
import "./CartOrder.scss";

const CartOrder = () => {
  return (
    <section className="cart-order">
      <div className="cart-order-address">
        <i>
          <AiOutlineInfoCircle />
        </i>
        <p>배송지를 등록해 주세요.</p>
        <button type="button">배송지 등록</button>
      </div>
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
