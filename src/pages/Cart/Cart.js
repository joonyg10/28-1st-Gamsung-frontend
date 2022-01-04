import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList/CartList";
import Navbar from "../../components/Navbar";
import "./Cart.scss";

const Cart = () => {
  // const [cartList, setCartList] = useState([]);

  // useEffect(() => {
  //   fetch("url", () => {
  //     method: "POST",
  //     headers : {},
  //     body: JSON.stringify({}),
  //   })
  //   .then((res) => res.json())
  //   .then((data) => setCartList(data));
  //   .catch((error) => console.error(error));
  // }, [cartList]);
  return (
    <>
      <Navbar />
      <div className="cart-wrap">
        <Link to="/">HOME</Link>
        <main className="cart">
          <CartList items={CART_ITEMS} />
          <section>주문 컴포넌트</section>
        </main>
      </div>
    </>
  );
};

const CART_ITEMS = [
  {
    name: "갤럭시 Z 플립",
    img: "https://cdn.pixabay.com/photo/2019/12/30/03/06/samsung-4728704_1280.jpg",
    price: "1,200,000",
  },
  {
    name: "갤럭시 Z 폴더",
    img: "https://cdn.pixabay.com/photo/2019/04/25/04/35/smart-home-4153906_1280.jpg",
    price: "1,900,000",
  },
];

export default Cart;
