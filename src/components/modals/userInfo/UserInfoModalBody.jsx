import React from "react";
import styled from "styled-components";
import { LANGUAGES } from "@constants/constant";

import noPicture from "@assets/images/no-picture.png";

const UserInfoModalBodyWrap = styled.div`
  padding: 20px 30px;
  display: flex;
  font-size: 16px;
  img {
    width: 140px;
    height: 140px;
    border: 1px solid #e6e6e6;
    background-color: #eee;
    border-radius: 50%;
    box-sizing: border-box;
    margin-right: 30px;
  }
`;

const UserInfoModalBody = ({ language, receiver }) => {
  const name = language === LANGUAGES.KO ? receiver.name : receiver.englishName ? receiver.englishName : receiver.name;
  const handleImgError = ({ target }) => {
    target.onerror = null;
    target.src = noPicture;
  };

  return (
    <UserInfoModalBodyWrap>
      <img src={receiver.picture || noPicture} alt="user img" referrerPolicy="no-referrer" onError={handleImgError} />
      <div>
        <p>{name}</p>
        <p>{receiver.team}</p>
        <p>{receiver.tel}</p>
        <p>{receiver.phone}</p>
        <p>{receiver.email}</p>
      </div>
    </UserInfoModalBodyWrap>
  );
};

export default UserInfoModalBody;
