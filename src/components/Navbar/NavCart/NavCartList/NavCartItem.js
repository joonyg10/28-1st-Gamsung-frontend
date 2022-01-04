import React from "react";
import "./NavCartItem.scss";

const NavCartItem = ({ name, image, price }) => {
  return (
    <li className="nav-cart-item">
      <img alt={name} src={image} />
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </li>
  );
};

export default NavCartItem;
