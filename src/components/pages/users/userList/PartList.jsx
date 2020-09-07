import React, { useState } from "react";
import styled from "styled-components";
import { partNameLangData } from "@data/languages/part-team-name";

import TeamList from "./TeamList";

const PartListWrap = styled.li`
  display: ${({ show }) => (show ? "block" : "none")};
  /* background-color: ${({ show }) => (show ? "red" : "green")}; */
  border-bottom: ${({ show }) => (show ? "1px dashed #e6e6e6" : "none")};
  margin-bottom: 40px;
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #252525;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const PartList = ({ language, langData, partName, teamsData }) => {
  const [isShow, setShow] = useState(true);

  const part = partNameLangData[partName] ? partNameLangData[partName][language] : partName;

  return (
    <PartListWrap show={isShow}>
      <h3 id={part}>{part}</h3>
      <TeamList {...{ language, langData, teamsData, setShow }} />
    </PartListWrap>
  );
};

export default PartList;
