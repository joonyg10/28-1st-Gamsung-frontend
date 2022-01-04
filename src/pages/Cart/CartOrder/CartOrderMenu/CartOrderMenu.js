import React from "react";
import "./CartOrderMenu.scss";

const CartOrderMenu = ({ name, number }) => {
  return (
    <li className="cart-order-price">
      <span>{name}</span>
      {/* shopList 스테이트를 담아와서 전달? */}
      <span>{number}</span>
    </li>
  );
};

export default CartOrderMenu;
