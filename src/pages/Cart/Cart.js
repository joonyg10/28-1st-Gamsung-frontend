import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CartList from "./CartList/CartList";
import CartOrder from "./CartOrder/CartOrder";
import "./Cart.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shopList, setShopList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    let itemsCheck = [];

    CART_ITEMS.map((item, i) => (itemsCheck[i] = item.id));

    setShopList(itemsCheck);
  }, []);

  const onChangeOrder = () => {
    const nowOrder = CART_ITEMS.filter(item => checkList.includes(item.id));
    return setOrderList(nowOrder);
  };

  useEffect(() => {
    onChangeOrder();
  }, [checkList]);

  const onChangeAll = e => {
    setCheckList(e.target.checked ? shopList : []);
  };

  const onChangeEach = (e, id) =>
    e.target.checked
      ? setCheckList([...checkList, id])
      : setCheckList(checkList.filter(checkId => checkId !== id));

  const API = "/cart";
  useEffect(() => {
    fetch(`${API}/`)
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(error => console.error(error));
  });

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
          <CartList
            items={CART_ITEMS}
            shopList={shopList}
            checkList={checkList}
            onChangeAll={onChangeAll}
            onChangeEach={onChangeEach}
          />
          <CartOrder orderList={orderList} />
        </main>
        <div className="cart-customer-service">
          <h3>고객센터</h3>
          <h4>1588-6084</h4>
          <p>
            평일 09시 ~ 18시 / 토요일 09시 ~ 13시 (일요일, 공휴일은 운영하지
            않습니다.)
          </p>
          <button>주문취소 안내</button>
        </div>
      </div>
    </>
  );
};

const CART_ITEMS = [
  {
    id: 1,
    name: "갤럭시 Z 플립",
    img: "https://cdn.pixabay.com/photo/2019/12/30/03/06/samsung-4728704_1280.jpg",
    count: 1,
    price: 1200000,
  },
  {
    id: 2,
    name: "갤럭시 Z 폴더",
    img: "https://cdn.pixabay.com/photo/2019/04/25/04/35/smart-home-4153906_1280.jpg",
    count: 2,
    price: 1900000,
  },
];

export default Cart;
