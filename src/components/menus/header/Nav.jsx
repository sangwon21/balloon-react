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
    line-height: 60px;
    padding: 0 15px;
    cursor: pointer;
    a {
      display: inline-block;
      color: #fff;
      font-size: 14px;
      height: 100%;
      text-decoration: none;
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
        <Link to={menu.path}>{langData[menu.id]}</Link>
      </li>
    );
  });

  return <NavWrap>{navList}</NavWrap>;
};

export default Nav;
