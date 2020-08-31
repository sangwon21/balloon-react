import React from "react";
import styled from "styled-components";

import balloonRed from "@assets/images/balloon-red.png";

const UserInfoWrap = styled.div`
  position: absolute;
  right: 0;
`;

const BalloonWrap = styled.div``;

const Balloon = styled.img`
  width: 20px;
  height: 25px;
  margin-right: 5px;
  &.used {
    opacity: 0.25;
  }
  :last-child {
    margin-right: 0;
  }
`;

const UserInfo = () => {
  const BALLOON_COUNT = 7;
  const TEST_COUNT = 5;

  let balloons = [];

  for (let i = 0; i < BALLOON_COUNT; i++) {
    const className = i < BALLOON_COUNT - TEST_COUNT ? "used" : "";
    balloons.push(<Balloon className={className} src={balloonRed} alt="balloon img" />);
  }

  return (
    <UserInfoWrap>
      <BalloonWrap>{balloons}</BalloonWrap>
    </UserInfoWrap>
  );
};

export default UserInfo;
