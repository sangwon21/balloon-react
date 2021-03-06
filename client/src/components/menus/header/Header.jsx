import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { LANGUAGES } from "@constants/constant";
import { changeSelectedTab } from "@modules/users";

import logoSmallKo from "@assets/images/logos/logo-small-ko.png";
import logoSmallJa from "@assets/images/logos/logo-small-ja.png";

import Nav from "./Nav";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";

const HeaderWrap = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.backgroundColor.main};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  box-sizing: border-box;
`;

const HeaderInner = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  padding: 0 20px;
  height: 44px;
  margin-right: 40px;
  img {
    width: 100%;
    height: 100%;
  }
  cursor: pointer;
`;

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { langData } = useSelector(({ language }) => language);

  const logos = {};
  logos[LANGUAGES.KO] = logoSmallKo;
  logos[LANGUAGES.JA] = logoSmallJa;

  const mainTitle = logos[langData["L0000"]];

  const handleClick = () => {
    dispatch(changeSelectedTab());
    history.push("/users");
  };

  return (
    <HeaderWrap data-test="header">
      <HeaderInner>
        <Title data-test="title" onClick={handleClick}>
          <img src={mainTitle} alt="title img" />
        </Title>
        <Nav />
        <SearchBar />
        <UserInfo />
      </HeaderInner>
    </HeaderWrap>
  );
};

export default Header;
