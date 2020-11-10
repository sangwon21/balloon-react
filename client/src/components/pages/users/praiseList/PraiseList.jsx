import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import kakaoHappy from "@assets/images/kakao-happy.png";

import Part from "./Part";

const NothingMessagesWrap = styled.div`
  padding: 40px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  b {
    font-weight: 600;
  }
  img {
    width: 180px;
    height: 180px;
  }
  p {
    margin: 15px 0;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
  }
`;

const PraiseListWrap = styled.ul`
  padding: 0 20px;
  min-height: 100vh;
`;

const PraiseList = ({ partsData, setUserInfoOpen }) => {
  const {
    login: { userData, messagesData },
    language: { language, langData },
  } = useSelector((index) => index);

  if (!userData) return null;

  if (!messagesData.length) {
    const text = () => {
      return { __html: langData["L0055"].replace("{{name}}", userData.name) };
    };

    return (
      <NothingMessagesWrap>
        <img src={kakaoHappy} alt="kakao img" />
        <p dangerouslySetInnerHTML={text()} />
      </NothingMessagesWrap>
    );
  }

  const userList = partsData.map((partData) => {
    const [partName, teamsData] = partData;
    return <Part key={partName} {...{ language, langData, partName, teamsData, setUserInfoOpen }} />;
  });

  return <PraiseListWrap>{userList}</PraiseListWrap>;
};

export default PraiseList;
