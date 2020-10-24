import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LANGUAGES } from "@constants/constant";

import balloonRed from "@assets/images/balloon-red.png";
import noPicture from "@assets/images/no-picture.png";

const MemberWrap = styled.li`
  position: relative;
`;

const MemberInner = styled.div`
  border-radius: 20px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  overflow: hidden;
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
  img {
    width: 100px;
    height: 100px;
    border: 1px solid #e6e6e6;
    background-color: #eee;
    border-radius: 50%;
    box-sizing: border-box;
  }
`;

const Balloon = styled.img`
  position: absolute;
  width: 50px;
  height: 58px;
  top: -10px;
  left: -12px;
  z-index: 1;
  pointer-events: none;
  animation-name: duplicateBalloonAnim;
  animation-duration: 400ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  @keyframes duplicateBalloonAnim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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

const Member = ({ member }) => {
  const {
    language: { language },
    login: { messagesData },
  } = useSelector((index) => index);

  const name = language === LANGUAGES.KO ? member.name : member.englishName ? member.englishName : member.name;

  const isDuplicate = messagesData.some((data) => data.receiverEmail === member.email);

  if (!isDuplicate) return null;

  return (
    <MemberWrap>
      <MemberInner>
        <Balloon src={balloonRed} alt="balloon img" />
        <ImgPanel>
          <img src={member.picture || noPicture} alt="user img" />
        </ImgPanel>
        <NamePanel>
          <span>{name}</span>
        </NamePanel>
      </MemberInner>
    </MemberWrap>
  );
};

export default Member;
