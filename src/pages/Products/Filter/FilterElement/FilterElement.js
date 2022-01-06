import React from "react";
import "./FilterElement.scss";

const FilterElement = ({ subcategory, changeCheckStatus }) => {
  const getAndSend = event => {
    changeCheckStatus(subcategory, event);
  };
  return (
    <div className="filter-element">
      <li>
        <input type="checkbox" onChange={getAndSend} id="input-checkbox" />
        <span>{subcategory}</span>
      </li>
    </div>
  );
};

export default FilterElement;
