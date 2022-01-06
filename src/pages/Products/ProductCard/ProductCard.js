import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ main_image, name, serial_number, price, storage }) => {
  const navigate = useNavigate();

  const moveDetail = () => {
    navigate(`/products/${serial_number}`);
  };

  return (
    <div className="productCard">
      <div className="product-image-container">
        <img className="product-image" src={main_image} alt="product" />
      </div>
      <div className="product-color-container">
        <span className="product-color-selector" />
        <span className="product-color-selector" />
        <span className="product-color-selector" />
      </div>
      <div className="product-storage">
        <div className="product-storage-selector">
          {storage}
          <span>GB</span>
        </div>
      </div>
      <div className="product-title">
        <span className="product-title-text">{name}</span>
        <span className="product-model">{serial_number}</span>
      </div>
      <div className="product-price">
        <span className="price-number">{price}</span>
        <span className="price-currency">원</span>
      </div>
      <div className="product-purchase">
        <form>
          <button
            className="purchase-button"
            type="button"
            onClick={moveDetail}
          >
            구매하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
