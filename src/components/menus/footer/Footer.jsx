import React from "react";
import styled from "styled-components";

import LanguageSelectBox from "@/components/common/languageSelector/LanguageSelectBox";

const FooterWrap = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #3b3a3c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterInner = styled.div`
  position: relative;
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: #939597;
  font-size: 13px;
  a {
    color: #939597;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const LanguageSelectBoxWrap = styled.div`
  position: absolute;
  right: 0;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInner>
        <Text>
          © Created by <a href="mailto:stlee@rsupport.com">Lee Seung Taek</a>
        </Text>
        <LanguageSelectBoxWrap>
          <LanguageSelectBox />
        </LanguageSelectBoxWrap>
      </FooterInner>
    </FooterWrap>
  );
};

export default Footer;
