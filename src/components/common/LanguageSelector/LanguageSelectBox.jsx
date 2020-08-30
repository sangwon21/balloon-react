import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RiArrowUpSLine } from "react-icons/ri";

import LanguageList from "./LanguageList";

const LanguageSelectBoxWrap = styled.div`
  position: relative;
  color: #333;
`;

const BoxInner = styled.div`
  display: flex;
  width: 130px;
  height: 20px;
  cursor: pointer;
`;

const CurrentLanguage = styled.div`
  width: 110px;
  height: 100%;
  background-color: #eee;
  font-size: 12px;
  line-height: 20px;
  padding-left: 7px;
`;

const SelectButton = styled.button`
  width: 20px;
  height: 100%;
  background-color: #00a6de;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 0;
  display: flex;
  cursor: pointer;
`;

const LanguageSelectBox = () => {
  const { language, langData } = useSelector(({ language }) => language);
  const [isOpen, setOpen] = useState(false);

  const currentLanguage = langData["T0000"];

  const handleClick = () => setOpen(!isOpen);

  return (
    <LanguageSelectBoxWrap>
      <BoxInner onClick={handleClick}>
        <CurrentLanguage>{currentLanguage}</CurrentLanguage>
        <SelectButton>
          <RiArrowUpSLine />
        </SelectButton>
      </BoxInner>
      {isOpen && <LanguageList {...{ language, langData, isOpen, setOpen }} />}
    </LanguageSelectBoxWrap>
  );
};

export default LanguageSelectBox;
