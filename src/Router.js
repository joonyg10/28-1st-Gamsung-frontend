import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import Sign from "./pages/Sign/Sign";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
