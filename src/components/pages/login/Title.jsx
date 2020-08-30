import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LANGUAGES } from "@constants/constant";

import logoLargeKo from "@assets/images/logos/logo-large-ko.png";
import logoLargeJa from "@assets/images/logos/logo-large-ja.png";

import Envelope from "./Envelope";
import GoogleLoginButton from "./GoogleLoginButton";

const TitleWrap = styled.div`
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.a`
  position: relative;
  top: -15px;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const Title = () => {
  const { langData } = useSelector(({ language }) => language);

  const logos = {};
  logos[LANGUAGES.KO] = logoLargeKo;
  logos[LANGUAGES.JA] = logoLargeJa;

  const mainTitle = logos[langData["L0000"]];
  const text = langData["L0002"];

  return (
    <TitleWrap>
      <Envelope />
      <div>
        <img src={mainTitle} alt="title img" />
      </div>
      <GoogleLoginButton />
      <Text href="mailto:stlee@rsupport.com">{text}</Text>
    </TitleWrap>
  );
};

export default Title;
