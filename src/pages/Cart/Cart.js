import React from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList/CartList";
import Navbar from "../../components/Navbar";
import "./Cart.scss";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart-wrap">
        <Link to="/">HOME</Link>
        <main className="cart">
          <CartList />
          <div>d</div>
        </main>
      </div>
    </>
  );
};

export default Cart;
