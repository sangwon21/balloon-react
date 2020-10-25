import React from "react";
import styled from "styled-components";
import { partNameLangData } from "@data/languages/part-team-name";

import Team from "./Team";

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

const Part = ({ language, langData, partName, teamsData, setOpen, setUserInfoOpen }) => {
  const part = partNameLangData[partName] ? partNameLangData[partName][language] : partName;

  const teamList = [];
  for (let [teamName, members] of Object.entries(teamsData)) {
    teamList.push(<Team key={teamName} {...{ language, langData, teamName, members, setOpen, setUserInfoOpen }} />);
  }
  teamList.sort((a, b) => {
    if (partName === "해외법인") return -1;
    return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
  });

  return (
    <PartWrap>
      <h3 id={part.trim()}>{part}</h3>
      {teamList}
    </PartWrap>
  );
};

export default Part;
