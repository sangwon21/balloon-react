import React from "react";
import styled from "styled-components";
import { partNameLangData } from "@data/languages/part-team-name";

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

const Part = ({ language, langData, partName, teamsData }) => {
  const part = partNameLangData[partName] ? partNameLangData[partName][language] : partName;

  return (
    <PartWrap>
      <h3 id={part}>{part}</h3>
      <TeamList {...{ language, langData, teamsData }} />
    </PartWrap>
  );
};

export default Part;
