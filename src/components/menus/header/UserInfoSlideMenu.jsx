import React, { useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ImBubbles } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";

import GoogleLogoutButton from "./GoogleLogoutButton";

const UserInfoModalWrap = styled.div`
  position: absolute;
  top: calc(100% + 13px);
  right: -10px;
  width: 240px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);

  animation-name: userInfoModalAnim;
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  overflow: hidden;
  @keyframes userInfoModalAnim {
    0% {
      height: 0;
    }
    100% {
      height: 160px;
    }
  }
`;

const UserInfoBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  font-size: 12px;
  color: #aaa;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const UserInfoInner = styled.div`
  width: 90%;
  height: 80px;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: 1px solid #e2e2e2;
  }
  .info-text {
    height: 38px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      max-width: 120px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .name {
      line-height: 20px;
      color: #000;
      font-size: 14px;
      font-weight: 600;
    }
    .email {
      line-height: 16px;
    }
  }
  :hover {
    .name {
      color: #00a6de;
    }
  }
`;

const TextMenuBox = styled.div`
  font-size: 14px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextMenuInner = styled.div`
  width: 90%;
  height: 50px;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .text-menu {
    display: flex;
    cursor: pointer;
    .icon {
      margin-right: 10px;
    }
    :hover {
      color: #00a6de;
    }
  }
`;

const UserInfoSlideMenu = ({ isOpen, setOpen, userData }) => {
  const history = useHistory();
  const modalRef = useRef();

  const { langData } = useSelector(({ language }) => language);

  const handleClickOutside = useCallback(
    ({ target }) => {
      if (isOpen && !modalRef.current.contains(target)) setOpen(false);
    },
    [isOpen, setOpen],
  );

  const handleClick = () => {
    setOpen(false);
    history.push("/box");
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <UserInfoModalWrap ref={modalRef}>
      <UserInfoBox>
        <UserInfoInner onClick={handleClick}>
          <img src={userData.picture} alt="user img" />
          <div className="info-text">
            <p className="name">{userData.name}</p>
            <p className="email">{userData.email}</p>
          </div>
        </UserInfoInner>
      </UserInfoBox>
      <TextMenuBox>
        <TextMenuInner>
          <div className="text-menu">
            <ImBubbles className="icon" />
            {langData["L0012"]}
          </div>
          <div className="text-menu">
            <IoMdLogOut className="icon" />
            <GoogleLogoutButton text={langData["L0013"]} />
          </div>
        </TextMenuInner>
      </TextMenuBox>
    </UserInfoModalWrap>
  );
};

export default UserInfoSlideMenu;
