import React from "react";
import styled from "styled-components";

import LanguageSelectBox from "@/components/common/languageSelector/LanguageSelectBox";

const FooterWrap = styled.div`
  position: absolute;
  width: 100%;
  bottom: 15px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  margin-top: 15px;
  color: #ffffff80;
  font-size: 13px;
  a {
    color: #ffffff80;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <LanguageSelectBox />
      <Text>
        © Created by <a href="mailto:stlee@rsupport.com">Lee Seung Taek</a>
      </Text>
    </FooterWrap>
  );
};

export default Footer;
