import React from "react";
import { Link } from "react-router-dom";
import "./Device.scss";

const Device = ({ deviceType }) => {
  return (
    <li className="nav-menu-item">
      <Link to="/products">
        <span>{deviceType}</span>
      </Link>
    </li>
  );
};

export default Device;
