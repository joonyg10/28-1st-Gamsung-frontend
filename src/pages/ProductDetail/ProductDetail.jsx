import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { serial_number } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getDetail = async () => {
      await fetch(`http://10.58.3.15:8000/products/${serial_number}`, {
        headers: {
          Authorization: localStorage.getItem("access-token"),
        },
      })
        .then(res => res.json())
        .then(data => setProduct(data?.results[0]));
    };
    getDetail();
  }, []);

  if (!product?.name) return <h1>Loading...</h1>;
  return (
    <section className="product-detail">
      <ProductCarousel images={product?.detail_images} />
      <ProductInfo product={product} />
    </section>
  );
};

export default ProductDetail;
