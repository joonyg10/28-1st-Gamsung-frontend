import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchBar from "./SearchBar/SearchBar";

const NavSearch = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <i className="nav-search">
      <AiOutlineSearch onClick={() => setIsClick(true)} />
      {isClick && <SearchBar isclick={setIsClick} />}
    </i>
  );
};

export default NavSearch;
