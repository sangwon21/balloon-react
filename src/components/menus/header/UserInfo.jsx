import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import balloonRed from "@assets/images/balloon-red.png";
import noPicture from "@assets/images/no-picture.png";

import UserInfoModal from "./UserInfoModal";

const UserInfoWrap = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
`;

const Balloon = styled.img`
  width: 20px;
  height: 23px;
  margin-right: 4px;
  &.used {
    opacity: 0.25;
  }
  :last-child {
    margin-right: 15px;
  }
`;

const UserImg = styled.img`
  width: 34px;
  height: 34px;
  background-color: #eee;
  border-radius: 50%;
  cursor: pointer;
`;

const UserInfo = () => {
  const [isOpen, setOpen] = useState(false);
  const { name, email, imageUrl, userData } = useSelector(({ login }) => login);

  const BALLOON_COUNT = 7;
  const USER_BALLOON_SIZE = userData.balloonSize;

  let balloons = [];
  for (let i = 0; i < BALLOON_COUNT; i++) {
    const className = i < BALLOON_COUNT - USER_BALLOON_SIZE ? "used" : "";
    balloons.push(<Balloon key={i} className={className} src={balloonRed} alt="balloon img" />);
  }

  const handleClick = () => setOpen(!isOpen);

  return (
    <UserInfoWrap>
      <div>{balloons}</div>
      <UserImg onClick={handleClick} src={imageUrl || noPicture} alt="user img" />
      {isOpen && <UserInfoModal {...{ isOpen, setOpen, name, email, imageUrl }} />}
    </UserInfoWrap>
  );
};

export default UserInfo;
