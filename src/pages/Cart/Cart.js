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

    cartItems.map((item, i) => (itemsCheck[i] = item.product_id));

    setShopList(itemsCheck);
  }, [cartItems]);

  console.log("cartItems: ", cartItems);
  console.log("shop: ", shopList);
  console.log("check: ", checkList);
  const onChangeOrder = () => {
    const nowOrder = cartItems.filter(item =>
      checkList.includes(item.product_id)
    );
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

  const API = "http://10.58.3.232:8000/carts";
  const accessToken = localStorage.getItem("access_token");

  const setItemCount = (productId, count) => {
    fetch(API, {
      method: "POST",
      headers: {
        Authorization: accessToken,
      },
      body: JSON.stringify({
        product_id: productId,
        quantity: count,
      }),
    }).then(res => res.json());
  };

  const itemIncrease = productId => {
    fetch(API, {
      method: "PATCH",
      headers: {
        Authorization: accessToken,
      },
      body: JSON.stringify({
        product_id: productId,
        quantity: 1,
      }),
    }).then(res => res.json());
  };

  const itemDecrease = productId => {
    fetch(API, {
      method: "PATCH",
      headers: {
        Authorization: accessToken,
      },
      body: JSON.stringify({
        product_id: productId,
        quantity: -1,
      }),
    }).then(res => res.json());
  };

  const itemDelete = productId => {
    fetch(`${API}/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: accessToken,
      },
    }).then(res => res.json());
  };

  useEffect(() => {
    fetch(API, {
      headers: {
        Authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then(data => setCartItems(data.cart_list));
  }, []);

  return (
    <>
      <Navbar />
      <div className="cart-wrap">
        <Link to="/">HOME</Link>
        <main className="cart">
          <CartList
            items={cartItems}
            shopList={shopList}
            checkList={checkList}
            onChangeAll={onChangeAll}
            onChangeEach={onChangeEach}
            itemDecrease={itemDecrease}
            itemIncrease={itemIncrease}
            setItemCount={setItemCount}
            itemDelete={itemDelete}
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

export default Cart;
