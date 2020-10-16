import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setReceiverData } from "@modules/receiver";
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
  width: 56px;
  height: 66px;
  top: -10px;
  left: -20px;
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
  background-color: ${(props) =>
    props.balloonSize ? (props.isDuplicate ? "rgba(231, 76, 60, 0.3)" : "rgba(0, 166, 222, 0.3)") : "rgba(231, 76, 60, 0.3)"};
  color: #333;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: ${(props) => (props.balloonSize ? (props.isDuplicate ? "default" : "pointer") : "default")};
  &.myImg {
    cursor: default;
  }
  p {
    text-shadow: 0 0 2px rgba(255, 255, 255, 1);
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    line-height: 25px;
  }
  &.active {
    opacity: 1;
  }
`;

const Member = ({ member, setOpen }) => {
  const dispatch = useDispatch();
  const memberEl = useRef();
  const [isHover, setHover] = useState(false);
  const {
    language: { language, langData },
    login: { userData, messagesData },
  } = useSelector((index) => index);

  const name = language === LANGUAGES.KO ? member.name : member.englishName ? member.englishName : member.name;

  const balloonSize = userData.balloonSize;
  const isDuplicate = messagesData.some((data) => data.receiverEmail === member.email);

  const imgPanelClassName = userData.email === member.email ? "myImg" : "";
  const hoverPanelClassName = `${isHover ? "active" : ""} ${imgPanelClassName}`;
  const hoverPanelText = () => {
    return { __html: balloonSize ? (isDuplicate ? langData["L0021"] : langData["L0020"]) : langData["L0019"] };
  };

  const handleMouseOver = () => {
    if (userData.email === member.email) return;
    setHover(true);
  };
  const handleMouseOut = () => setHover(false);
  const handleClick = () => {
    if (userData.email === member.email) return;
    if (!balloonSize) return;
    if (isDuplicate) return;
    dispatch(setReceiverData(memberEl.current.dataset));
    setOpen(true);
  };

  return (
    <MemberWrap>
      <MemberInner
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        data-email={member.email}
        data-name={member.name}
        data-english-name={member.englishName}
        data-picture={member.picture}
        ref={memberEl}
      >
        {isDuplicate && <Balloon src={balloonRed} alt="balloon img" />}
        <ImgPanel className={imgPanelClassName} onClick={handleClick}>
          <img src={member.picture || noPicture} alt="user img" />
          <HoverPanel className={hoverPanelClassName} isDuplicate={isDuplicate} balloonSize={balloonSize}>
            <p dangerouslySetInnerHTML={hoverPanelText()} />
          </HoverPanel>
        </ImgPanel>
        <NamePanel>
          <span>{name}</span>
        </NamePanel>
      </MemberInner>
    </MemberWrap>
  );
};

export default Member;
