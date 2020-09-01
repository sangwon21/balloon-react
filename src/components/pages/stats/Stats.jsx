import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@modules/page";
import styled from "styled-components";
import { ImBubbles } from "react-icons/im";

import balloonLetterRed from "@assets/images/balloon-letter-red.png";

import ContentWrapper from "@components/common/wrapper/ContentWrap";

const BalloonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Balloon = styled.div`
  position: relative;
  left: -150px;
  display: inline-block;
  padding-top: 64px;
  width: 500px;
  height: 600px;
  animation-duration: 4.5s;
  animation: balloon 4.5s ease-in-out infinite;
  transform-origin: bottom center;
  @keyframes balloon {
    0% {
      transform: translateY(0) rotate(-3deg);
    }
    25% {
      transform: translateY(-20px) rotate(0deg);
    }
    50% {
      transform: translateY(-40px) rotate(-5deg);
    }
    75% {
      transform: translateY(-25px) rotate(1deg);
    }
    100% {
      transform: translateY(0) rotate(-3deg);
    }
  }
  .total-count {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-weight: bold;
    font-size: 52px;
    text-indent: 16px;
    text-shadow: 5px 5px rgba(0, 0, 0, 0.5);
    letter-spacing: 0.03em;
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    font-size: 26px;
    line-height: 40px;
    b {
      font-weight: 600;
    }
  }
  button {
    display: flex;
    align-items: center;
    margin-top: 40px;
    padding: 16px 38px;
    font-size: 20px;
    color: #fff;
    background-color: #00a6de;
    border: none;
    outline: none;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
    border-radius: 3px;
    cursor: pointer;
    .icon {
      margin-right: 14px;
    }
    :hover {
      background-color: #0090c0;
    }
  }
`;

const Stats = () => {
  const dispatch = useDispatch();
  const { langData } = useSelector(({ language }) => language);

  const TEST_COUNT = 10000;

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
  }, [dispatch]);

  const createMarkup = () => {
    return { __html: langData["L0059"] };
  };

  return (
    <ContentWrapper title={langData["L0009"]}>
      <BalloonSection>
        <Balloon>
          <img src={balloonLetterRed} alt="balloon img" />
          <span className="total-count">
            {TEST_COUNT}
            {langData["L0061"]}
          </span>
        </Balloon>
        <DescriptionBox>
          <p dangerouslySetInnerHTML={createMarkup()} />
          <button type="button">
            <ImBubbles className="icon" />
            <span>{langData["L0060"]}</span>
          </button>
        </DescriptionBox>
      </BalloonSection>
    </ContentWrapper>
  );
};

export default Stats;
