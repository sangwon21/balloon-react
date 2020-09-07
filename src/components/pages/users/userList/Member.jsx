import React from "react";
import styled from "styled-components";

import noPicture from "@assets/images/no-picture.png";

const MemberWrap = styled.li`
  border-radius: 2px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
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
  cursor: pointer;
  img {
    width: 100px;
    height: 100px;
    border: 1px solid #e6e6e6;
    background-color: #eee;
    border-radius: 50%;
    box-sizing: border-box;
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

const Member = ({ member }) => {
  return (
    <MemberWrap>
      <ImgPanel>
        <img src={member.picture ? member.picture : noPicture} alt="user img" />
      </ImgPanel>
      <NamePanel>
        <span>{member.name}</span>
      </NamePanel>
    </MemberWrap>
  );
};

export default Member;
