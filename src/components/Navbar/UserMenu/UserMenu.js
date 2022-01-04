import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import UserMenuItem from "./UserMenuItem/UserMenuItem";
import "./UserMenu.scss";

const UserMenu = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <i
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <BiUser />
      {isHover && (
        <ul className="nav-icons-user">
          {USER_MENU.map(item => {
            return (
              <UserMenuItem key={item.menu} menu={item.menu} link={item.link} />
            );
          })}
        </ul>
      )}
    </i>
  );
};

const USER_MENU = [
  {
    menu: "로그인",
    link: "/signin",
  },
  {
    menu: "마이페이지",
    link: "/signin",
  },
  {
    menu: "구매내역",
    link: "/signin",
  },
  {
    menu: "도움말",
    link: "/signin",
  },
];

export default UserMenu;
