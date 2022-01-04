import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import "./SearchBar.scss";

const SearchBar = ({ isclick }) => {
  return (
    <div className="nav-searchbar-wrap">
      <div className="nav-searchbar">
        <input placeholder="공동구매" />
        <i className="nav-searchbar-searchicon">
          <AiOutlineSearch />
        </i>
        <i className="nav-searchbar-closeicon" onClick={() => isclick(false)}>
          <AiOutlineCloseCircle />
        </i>
      </div>
    </div>
  );
};

export default SearchBar;
