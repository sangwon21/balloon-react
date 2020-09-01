import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@modules/page";
import styled from "styled-components";

import ContentWrapper from "@components/common/wrapper/ContentWrap";

const UserInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 98px;
    height: 98px;
    border: 1px solid #e2e2e2;
    border-radius: 50%;
  }
  .name {
    font-size: 23px;
    margin: 10px 0;
  }
  .email {
    font-size: 14px;
    color: #aaa;
    margin-bottom: 10px;
  }
  ::after {
    position: absolute;
    bottom: 0;
    display: inline-block;
    content: "";
    width: 100%;
    height: 10px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
`;

const Box = () => {
  const dispatch = useDispatch();
  const {
    language: { langData },
    login: { name, email, imageUrl },
  } = useSelector((index) => index);

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
  }, [dispatch]);

  return (
    <ContentWrapper>
      <UserInfoBox>
        <img src={imageUrl} alt="user img" />
        <p className="name">{name}</p>
        <p className="email">{email}</p>
      </UserInfoBox>
    </ContentWrapper>
  );
};

export default Box;
