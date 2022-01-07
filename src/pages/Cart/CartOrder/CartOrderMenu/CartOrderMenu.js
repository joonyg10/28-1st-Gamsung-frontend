import React from "react";
import "./CartOrderMenu.scss";

const CartOrderMenu = ({ name, number }) => {
  return (
    <li className="cart-order-price">
      <span>{name}</span>
      <span>{number}</span>
    </li>
  );
};

export default CartOrderMenu;
