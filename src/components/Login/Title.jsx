import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
  const { language } = useSelector(({ language }) => language);
  const logos = {
    ko: logoLargeKo,
    ja: logoLargeJa,
  };

  const mainTitle = logos[language];

  return (
    <TitleWrap>
      <Envelope />
      <div>
        <img src={mainTitle} alt="칭찬합시다 타이틀 이미지" />
      </div>
      <GoogleLoginButton />
      <Text href="mailto:stlee@rsupport.com">혹시 로그인이 안된다면 메일주세요!</Text>
    </TitleWrap>
  );
};

export default Title;
