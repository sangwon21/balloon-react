import React from "react";
import { useSelector } from "react-redux";
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

const Part = ({ language, langData, partName, teamsData, setUserInfoOpen }) => {
  let isExist = false;
  const { messagesData } = useSelector(({ login }) => login);
  const receivers = messagesData.map((data) => data.receiverEmail);

  const teamList = [];
  const part = partNameLangData[partName] ? partNameLangData[partName][language] : partName;

  for (let [teamName, members] of Object.entries(teamsData)) {
    teamList.push(<Team key={teamName} {...{ language, langData, teamName, members, setUserInfoOpen }} />);
    if (isExist) continue;
    isExist = members.some((member) => receivers.includes(member.email));
  }

  if (!isExist) return null;

  return (
    <PartWrap>
      <h3 id={part}>{part}</h3>
      {teamList}
    </PartWrap>
  );
};

export default Part;
