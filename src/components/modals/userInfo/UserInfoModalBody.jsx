import React from "react";
import styled from "styled-components";
import { LANGUAGES } from "@constants/constant";

import noPicture from "@assets/images/no-picture.png";

const UserInfoModalBodyWrap = styled.div`
  padding: 9px;
  img {
    width: 120px;
    height: 120px;
    border: 1px solid #e6e6e6;
    background-color: #eee;
    border-radius: 50%;
    box-sizing: border-box;
  }
`;

const UserInfoModalBody = ({ language, receiver }) => {
  const name = language === LANGUAGES.KO ? receiver.name : receiver.englishName ? receiver.englishName : receiver.name;
  return (
    <UserInfoModalBodyWrap>
      <img src={receiver.picture || noPicture} alt="user img" />
      <p>{name}</p>
      <p>{receiver.team}</p>
      <p>{receiver.tel}</p>
      <p>{receiver.phone}</p>
      <p>{receiver.email}</p>
    </UserInfoModalBodyWrap>
  );
};

export default UserInfoModalBody;
