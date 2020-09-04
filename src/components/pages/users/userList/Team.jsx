import React from "react";
import styled from "styled-components";

const TeamWrap = styled.div`
  h4 {
    color: #aaa;
    font-size: 14px;
    margin: 10px 0;
  }
`;

const Team = ({ teamName, members }) => {
  return (
    <TeamWrap>
      <h4 id={teamName}>
        {teamName} <span>({members.length}명)</span>
      </h4>
    </TeamWrap>
  );
};

export default Team;
