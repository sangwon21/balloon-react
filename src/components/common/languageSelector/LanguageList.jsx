import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setLanguage } from "@modules/language";
import { STORAGE_KEYS, LANGUAGES } from "@constants/constant";

import koData from "@data/languages/ko.json";
import jaData from "@data/languages/ja.json";

const LanguageListWrap = styled.ul`
  position: absolute;
  bottom: 22px;
  left: 0;
  width: 130px;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  cursor: pointer;
`;

const LanguageBox = styled.li`
  font-size: 12px;
  line-height: 20px;
  padding-left: 7px;
  transition: background 0.25s;
  border-bottom: 0.5px dotted #bdc3c7;
  box-sizing: border-box;
  &.current {
    font-weight: 600;
  }
  :hover {
    background-color: rgba(241, 169, 160, 0.3);
  }
  :last-child {
    border-bottom: none;
  }
`;

const LanguageList = ({ language, isOpen, setOpen }) => {
  const dispatch = useDispatch();
  const listEl = useRef();

  const handleClickOutside = useCallback(
    ({ target }) => {
      if (isOpen && !listEl.current.contains(target)) setOpen(false);
    },
    [isOpen, setOpen],
  );

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const langDatas = {};
  langDatas[LANGUAGES.KO] = koData;
  langDatas[LANGUAGES.JA] = jaData;

  let languageList = [];

  for (let key in langDatas) {
    const className = key === language ? "current" : "";

    const handleClick = () => {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, key);
      dispatch(setLanguage(key, langDatas[key]));
      setOpen(false);
    };

    const item = (
      <LanguageBox key={key} className={className} onClick={handleClick}>
        {langDatas[key]["T0000"]}
      </LanguageBox>
    );

    languageList.push(item);
  }

  return <LanguageListWrap ref={listEl}>{languageList}</LanguageListWrap>;
};

export default LanguageList;
