import React, { useState } from "react";
import MenuCategory from "./MenuCategory/MenuCategory";
import "./NavMenu.scss";

const NavMenu = ({ title, category }) => {
  const [isListHover, setIsListHover] = useState(false);

  return (
    <li
      className="nav-menu"
      onMouseEnter={() => setIsListHover(true)}
      onMouseLeave={() => setIsListHover(false)}
    >
      <span className="nav-menu-title">{title}</span>
      {isListHover && (
        <ul className="nav-menu-category">
          {category.map(categoryItem => {
            return (
              <MenuCategory
                key={categoryItem.type}
                type={categoryItem.type}
                content={categoryItem.device}
                image={categoryItem.image}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default NavMenu;
