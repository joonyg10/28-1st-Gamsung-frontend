import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Device from "./Device/Device";
import "./MenuCategory.scss";

const MenuCategory = ({ type, content, image }) => {
  const [listHover, setListHover] = useState(false);
  return (
    <li
      className="nav-menu-devices"
      onMouseEnter={() => setListHover(true)}
      onMouseLeave={() => setListHover(false)}
    >
      <span>{type}</span>
      {listHover && (
        <>
          <i>
            <MdKeyboardArrowRight />
          </i>
          <ul className="nav-menu-device">
            {content.map(element => {
              return <Device key={element} deviceType={element} />;
            })}
          </ul>
          <div className="nav-menu-img">
            <div>
              <img alt={type} src={image} />
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default MenuCategory;
