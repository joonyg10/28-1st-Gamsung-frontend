import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineDownload,
  AiFillStar,
  AiOutlineStar,
  AiFillCloseCircle,
} from "react-icons/ai";
import { BiShareAlt, BiPencil } from "react-icons/bi";
import Dropdown from "./Dropdown/Dropdown";
import "./ProductInfo.scss";

const STARS = Array(5).fill(0);
const starColor = "rgb(255, 200, 66)";

const ProductInfo = ({ product }) => {
  const { name, price, serial_number, storage } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const earnPoint = Math.floor(price * 0.002 + 60000).toLocaleString();
  const navigate = useNavigate();

  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity(prevQuantity => prevQuantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const addToCart = async () => {
    await fetch("http://10.58.5.80:8000/carts", {
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      method: "POST",
      body: JSON.stringify({ product_id: product.id, quantity }),
    });
  };

  useEffect(() => {
    if (isModalOpen) addToCart();
  }, [isModalOpen]);

  return (
    <section className="product-info">
      <header className="info-header">
        <span className="sale">청구할인</span>
        <BiShareAlt size={22} />
        <AiOutlineHeart size={22} />
      </header>

      <h2>{name}</h2>
      <p className="serial-number">{serial_number}</p>

      <div className="product-reviews">
        <div className="reviews-star">
          {STARS.map((_, idx) =>
            idx < 4 ? (
              <AiFillStar key={idx} style={{ "--fill": starColor }} size={16} />
            ) : (
              <AiOutlineStar key={idx} size={16} />
            )
          )}
          <span>4.5 &nbsp;(52건)</span>
        </div>
        <span className="write-reviews">
          <BiPencil size={16} />
          상풍명 쓰기
        </span>
      </div>

      <div className="price-info">
        <span className="price-title">판매가</span>
        <span className="price">{price.toLocaleString()}원</span>
      </div>

      <div className="detail-coupon">
        <span className="detail-coupon-title">회원님께 드리는 혜택!</span>
        <p className="coupon-issued">
          <span>쿠폰 받기</span>
          <AiOutlineDownload size={22} />
        </p>
      </div>

      <section className="detail-selector">
        <Dropdown title="색상" desc="팬텀 블랙">
          <div className="circle-wrapper">
            <div className="circle" />
            <div
              className="circle"
              style={{ "--bg-color": "rgb(34, 54, 49)" }}
            />
            <div
              className="circle"
              style={{ "--bg-color": "rgb(195, 195, 195)" }}
            />
          </div>
        </Dropdown>

        <Dropdown title="메모리" desc={`${storage}GB`}>
          <div className="storage-wrapper">
            <button
              className={`storage-selector ${storage === 256 && "current"}`}
            >
              256GB
            </button>
            <button
              className={`storage-selector ${storage === 512 && "current"}`}
            >
              512GB
            </button>
          </div>
        </Dropdown>

        <div className="counter">
          <h3>수량</h3>
          <div>
            <span className="qunatity-controller" onClick={decreaseQuantity}>
              -
            </span>
            <input
              type="text"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
            <span className="qunatity-controller" onClick={increaseQuantity}>
              +
            </span>
          </div>
        </div>
      </section>

      <Dropdown title={`${earnPoint}포인트 적립`} height="6rem">
        <section className="dropdown-desc">
          삼성전자 &nbsp;
          <span className="primary">
            포인트{earnPoint}
            (기본 0.2%+금액대별 포인트 80,000+상품별 포인트 40,000)
          </span>
          적립예정
        </section>
      </Dropdown>
      <div className="divider" />

      <Dropdown title="삼성카드 5%" height="8rem">
        <section className="dropdown-desc">
          <header>
            <span className="primary">삼성카드 </span>
            결제 시 5% 청구할인
          </header>
          <p>1인 (카드사 기준) 행사기간 20만원 한도,</p>
          <p>단, 간편결제는 제외(카카오페이, PAYCO 등), 법인(기업)/</p>
          <p>체크/선불/기프트/은행계열 카드 제외</p>
        </section>
      </Dropdown>

      <div className="price-info total-amount">
        <span className="price-title bold">판매가</span>
        <span className="price">{(quantity * price).toLocaleString()}원</span>
      </div>

      <div className="divider full" />

      <div className="utils">
        <button className="primary" onClick={() => setIsModalOpen(true)}>
          장바구니
        </button>
        <button>바로구매</button>
      </div>

      <article className={`${isModalOpen && "open"} cart-modal`}>
        <section className="modal">
          <p className="modal-title">제품이 장바구니에 추가 되었습니다.</p>
          <button className="primary" onClick={goToCart}>
            장바구니 가기
          </button>
          <button onClick={closeModal}>쇼핑 계속하기</button>
          <AiFillCloseCircle
            className="modal-close"
            onClick={closeModal}
            size={32}
          />
        </section>
      </article>
    </section>
  );
};

export default ProductInfo;
