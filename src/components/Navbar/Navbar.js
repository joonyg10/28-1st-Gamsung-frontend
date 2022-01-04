import React from "react";
import NavMenu from "./NavMenu/NavMenu";
import NavSearch from "./NavSearch/NavSearch";
import NavCart from "./NavCart/NavCart";
import UserMenu from "./UserMenu/UserMenu";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <h1>GAMSUNG</h1>
        <nav className="nav">
          <ul className="nav-menulist">
            {NAV_MENU_DATA.map(menu => {
              return (
                <NavMenu
                  key={menu.title}
                  title={menu.title}
                  category={menu.category}
                />
              );
            })}
          </ul>
          <div className="nav-icons">
            <NavSearch />
            <NavCart />
            <UserMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

const NAV_MENU_DATA = [
  {
    title: "모바일",
    category: [
      {
        type: "스마트폰",
        device: ["전체 스마트폰", "갤럭시 Z", "갤럭시 S", "갤럭시 A"],
        image:
          "https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80",
      },
      {
        type: "태블릿",
        device: ["전체 태블릿", "갤럭시 탭 A", "갤럭시 탭 S"],
        image:
          "https://images.unsplash.com/photo-1633113093730-47449a1a9c6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      },
      {
        type: "갤럭시 북",
        device: [
          "전체 갤럭시 북",
          "갤럭시 북 Pro",
          "갤럭시 북 Flex",
          "갤럭시 북 Ion",
        ],
        image:
          "https://images.unsplash.com/photo-1522202195465-df8a5f26fa15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
  {
    title: "Team",
    category: [
      {
        type: "민욱",
        device: ["hi"],
        image: "asd",
      },
      {
        type: "준영",
        device: ["hi"],
        image: "asd",
      },
      {
        type: "종호",
        device: ["hi"],
        image: "asd",
      },
      {
        type: "민성",
        device: ["hi"],
        image: "asd",
      },
      {
        type: "병연",
        device: ["hi"],
        image: "asd",
      },
    ],
  },
];

export default Navbar;
