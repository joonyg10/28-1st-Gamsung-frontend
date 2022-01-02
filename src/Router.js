import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
