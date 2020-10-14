import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import kakaoHappy from "@assets/images/kakao-happy.png";

import Member from "./Member";

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

const PraiseListWrap = styled.div`
  padding: 20px;
  min-height: 100vh;
`;

const PraiseList = () => {
  const {
    login: { userData, messagesData },
    language: { langData },
  } = useSelector((index) => index);

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

  return <PraiseListWrap>이번 달 칭찬한 사람</PraiseListWrap>;
};

export default PraiseList;
