import React, { useState } from "react";
import styled from "styled-components";
import { partNameLangData } from "@data/languages/part-team-name";

import Team from "./Team";

const PartWrap = styled.li`
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

const Part = ({ language, langData, partName, teamsData }) => {
  const [isShow, setShow] = useState(true);

  const part = partNameLangData[partName] ? partNameLangData[partName][language] : partName;

  const teamList = [];
  for (let [teamName, members] of Object.entries(teamsData)) {
    teamList.push(<Team key={teamName} {...{ language, langData, teamName, members, setShow }} />);
  }

  return (
    <PartWrap show={isShow}>
      <h3 id={part}>{part}</h3>
      {teamList}
    </PartWrap>
  );
};

export default Part;
