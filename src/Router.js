import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main/Main";
import Sign from "./pages/Sign/Sign";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<Sign />} />
        <Route path="signup" element={<Sign />} />
        <Route path="/" element={<Layout />}>
          <Route path="gamsung" element={<Main />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:serial_number" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
