import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { navMenus } from "@data/menus/nav";

const NavWrap = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  li {
    height: 60px;
    a {
      padding: 0 15px;
      display: inline-block;
      height: 100%;
      color: #fff;
      font-size: 14px;
      text-decoration: none;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    &.active {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

const Nav = () => {
  const {
    language: { langData },
    page: { currentPage },
  } = useSelector((index) => index);

  const navList = navMenus.map((menu) => {
    const className = menu.path === currentPage ? "active" : "";

    return (
      <li key={menu.id} className={className}>
        <Link to={menu.path}>
          <span>{langData[menu.id]}</span>
        </Link>
      </li>
    );
  });

  return <NavWrap>{navList}</NavWrap>;
};

export default Nav;
