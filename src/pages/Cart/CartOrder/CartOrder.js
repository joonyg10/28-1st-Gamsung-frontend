import React from "react";
import CartOrderMenu from "./CartOrderMenu/CartOrderMenu";
import CartOrderAddress from "./CartOrderAddress/CartOrderAddress";
import "./CartOrder.scss";

const CartOrder = ({ orderList }) => {
  const isOrder = orderList.length !== 0;

  const orderCount = orderList.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const orderPrice = orderList.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);

  const orderPriceTrans = orderPrice.toLocaleString("ko-KR");

  const ORDER_MENU = [
    {
      name: "전체 상품",
      number: `${orderCount || 0} 개`,
    },
    {
      name: "주문 금액",
      number: `${orderPriceTrans || 0} 원`,
    },
    {
      name: "할인 금액",
      number: "0 원",
    },
  ];

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
        <span>{orderPriceTrans}</span>
      </div>
      <button
        className={`cart-order-button ${isOrder ? "active" : ""}`}
        disabled={!isOrder}
      >
        주문하기
      </button>
    </section>
  );
};

export default CartOrder;
