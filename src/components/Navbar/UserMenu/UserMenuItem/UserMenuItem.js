import React from "react";
import { Link } from "react-router-dom";
import "./UserMenuItem.scss";

const UserMenuItem = ({ menu, link }) => {
  return (
    <li className="nav-icon-menu">
      <Link to={link}>{menu}</Link>
    </li>
  );
};

export default UserMenuItem;
