import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LANGUAGES } from "@constants/constant";

import noPicture from "@assets/images/no-picture.png";

const MemberWrap = styled.li`
  border-radius: 2px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
`;

const ImgPanel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
  img {
    width: 100px;
    height: 100px;
    border: 1px solid #e6e6e6;
    background-color: #eee;
    border-radius: 50%;
    box-sizing: border-box;
  }
`;

const NamePanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: #eee;
  border-top: 1px solid #ddd;
  color: #252525;
  font-size: 14px;
  box-sizing: border-box;
`;

const HoverPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 166, 222, 0.3);
  color: #333;
  opacity: 0;
  transition: opacity 0.3s;
  span {
    text-shadow: 0 0 2px rgba(255, 255, 255, 1);
    font-size: 1.2em;
    font-weight: bold;
  }
  &.active {
    opacity: 1;
  }
`;

const Member = ({ member }) => {
  const [isHover, setHover] = useState(false);
  const {
    language: { language },
    login: { userData },
  } = useSelector((index) => index);

  const name = language === LANGUAGES.KO ? member.name : member.englishName ? member.englishName : member.name;

  const handleMouseEnter = () => {
    if (userData.email === member.email) return;
    setHover(true);
  };
  const handleMouseLeave = () => setHover(false);

  const hoverPanelClassName = isHover ? "active" : "";

  return (
    <MemberWrap
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-email={member.email}
      data-name={member.name}
      data-english-name={member.englishName}
    >
      <ImgPanel>
        <img src={member.picture ? member.picture : noPicture} alt="user img" />
        <HoverPanel className={hoverPanelClassName}>
          <span>칭찬하기</span>
        </HoverPanel>
      </ImgPanel>
      <NamePanel>
        <span>{name}</span>
      </NamePanel>
    </MemberWrap>
  );
};

export default Member;
