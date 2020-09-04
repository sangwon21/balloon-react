import React from "react";
import styled from "styled-components";

import TeamList from "./TeamList";

const PartWrap = styled.li`
  border-bottom: 1px dashed #e6e6e6;
  margin-bottom: 40px;
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #252525;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const Part = ({ partName, teamsData }) => {
  return (
    <PartWrap>
      <h3 id={partName}>{partName}</h3>
      <TeamList {...{ teamsData }} />
    </PartWrap>
  );
};

export default Part;
