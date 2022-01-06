import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList/CartList";
import CartOrder from "./CartOrder/CartOrder";
import "./Cart.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const API = "http://10.58.5.80:8000/carts";
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    fetch(API, {
      headers: {
        Authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then(data =>
        setCartItems(
          data.cart_list.map(item => ({ ...item, isSelected: true })) ?? []
        )
      );
  }, []);

  const handleCount = ({ action, count, productId }) => {
    const actionType = {
      modify: "modify",
      increase: "increase",
      decrease: "decrease",
    };

    switch (actionType[action]) {
      case actionType.modify:
        modifyCount(productId, count);
        break;
      case actionType.increase:
        increaseCount(productId);
        break;
      case actionType.decrease:
        decreaseCount(productId);
        break;
      default:
        return;
    }

    function modifyCount(productId, count) {
      fetch(API, {
        method: "POST",
        headers: {
          Authorization: accessToken,
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: count,
        }),
      })
        .then(res => res.json())
        .then(res => {
          setCartItems((prev, count) => {
            return prev.map(item => {
              if (item.product_id === productId) {
                return { ...item, quantity: count };
              }
              return item;
            });
          });
        });
    }

    function increaseCount(productId) {
      fetch(API, {
        method: "PATCH",
        headers: {
          Authorization: accessToken,
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: 1,
        }),
      })
        .then(res => res.json())
        .then(res => {
          setCartItems(prev =>
            prev.map(item => {
              if (item.product_id === productId) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })
          );
        });
    }

    function decreaseCount(productId) {
      fetch(API, {
        method: "PATCH",
        headers: {
          Authorization: accessToken,
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: -1,
        }),
      })
        .then(res => res.json())
        .then(res => {
          setCartItems(prev =>
            prev.map(item => {
              if (item.product_id === productId) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            })
          );
        });
    }
  };

  const handleSelectItem = productId => {
    setCartItems(prev => {
      return prev.map(item => {
        if (productId === item.product_id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return item;
      });
    });
  };

  const handleSelectedItemAll = checked => {
    if (checked === true) {
      setCartItems(prev => prev.map(item => ({ ...item, isSelected: true })));
    } else {
      setCartItems(prev => prev.map(item => ({ ...item, isSelected: false })));
    }
  };

  const itemDelete = productId => {
    fetch(`${API}/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then(res => {
        setCartItems(prev =>
          prev.filter(item => item.product_id !== productId)
        );
      });
  };

  return (
    <div className="cart-wrap">
      <Link to="/gamsung">HOME</Link>
      <main className="cart">
        <CartList
          items={cartItems}
          handleCount={handleCount}
          handleSelectItem={handleSelectItem}
          handleSelectedItemAll={handleSelectedItemAll}
          itemDelete={itemDelete}
        />
        <CartOrder cartItems={cartItems} />
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
  );
};

export default Cart;
