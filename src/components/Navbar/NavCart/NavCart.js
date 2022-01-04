import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import NavCartItem from "./NavCartList/NavCartItem";
import "./NavCart.scss";

const NavCart = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <i onClick={() => setIsClick(preIsClick => !preIsClick)}>
      <BsCart2 />
      {isClick && (
        <ul className="nav-cart-items">
          {CART_ITEMS.map(cartItem => (
            <NavCartItem
              key={cartItem.name}
              name={cartItem.name}
              price={cartItem.price}
              image={cartItem.image}
            />
          ))}
          <Link to="/cart">장바구니 보기</Link>
        </ul>
      )}
    </i>
  );
};

const CART_ITEMS = [
  {
    name: "갤럭시 Z 플립 자급제",
    price: "1,200,000",
    image:
      "https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80",
  },
  {
    name: "갤럭시 Z 폴더 자급제",
    price: "1,900,000",
    image:
      "https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80",
  },
];

export default NavCart;
