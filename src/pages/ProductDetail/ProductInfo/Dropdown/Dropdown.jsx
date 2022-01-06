import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./Dropdown.scss";

const mountAnimation = `dropdownMount 250ms ease-in`;
const unMountAnimation = `dropdownUnmount 250ms ease-out`;

const Dropdown = ({ size, title, desc, height, children }) => {
  const [isMount, setIsMount] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isDropdownOprn = isClicked ? "open" : "";
  const animationStyle = isMount ? mountAnimation : unMountAnimation;

  const showDescription = () => {
    setIsMount(prevIsMount => !prevIsMount);
    if (!isClicked) setIsClicked(true);
  };

  return (
    <div className="detail-dropdown" style={{ "--size": size }}>
      <header className="dropdown-header" onClick={showDescription}>
        <h3>{title}</h3>
        <span>{desc}</span>
        <IoIosArrowDown className={`${isDropdownOprn} dropdown-arrow`} />
      </header>
      {isClicked && (
        <div
          className="dropdown-detail-wrapper"
          style={{ "--animation": animationStyle, "--height": height }}
          onAnimationEnd={() => {
            if (!isMount) setIsClicked(false);
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
