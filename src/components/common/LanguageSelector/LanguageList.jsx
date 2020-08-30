import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setLanguage } from "@modules/language";

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
    background-color: rgba(0, 166, 222, 0.3);
  }
  :last-child {
    border-bottom: none;
  }
`;

const LanguageList = ({ language, languages, isOpen, setOpen }) => {
  const dispatch = useDispatch();
  const listEl = useRef();

  const handleClickOutside = ({ target }) => {
    if (isOpen && !listEl.current.contains(target)) setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  let languageList = [];

  for (let [key, value] of Object.entries(languages)) {
    const className = key === language ? "current" : "";
    const handleClick = () => {
      dispatch(setLanguage(key));
      setOpen(false);
    };
    const item = (
      <LanguageBox key={key} className={className} onClick={handleClick}>
        {value}
      </LanguageBox>
    );
    languageList.push(item);
  }

  return <LanguageListWrap ref={listEl}>{languageList}</LanguageListWrap>;
};

export default LanguageList;
