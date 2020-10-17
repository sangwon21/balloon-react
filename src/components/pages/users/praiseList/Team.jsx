import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { teamNameLangData } from "@data/languages/part-team-name";

import Member from "./Member";

const TeamWrap = styled.div`
  h4 {
    color: #aaa;
    font-size: 14px;
    margin: 15px 0;
  }
  ul {
    margin: 10px 0 40px 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
  }
`;

const Team = ({ language, langData, teamName, members }) => {
  let isExist;
  const { messagesData } = useSelector(({ login }) => login);
  const receivers = messagesData.map((data) => data.receiverEmail);

  const team = teamNameLangData[teamName] ? teamNameLangData[teamName][language] : teamName;

  const filterList = members.map((member) => {
    isExist = members.some((member) => receivers.includes(member.email));
    return <Member key={member._id} {...{ member }} />;
  });

  if (!isExist) return null;

  return (
    <TeamWrap>
      <h4 id={team}>
        {team} <span>({langData["L0016"].replace("%s", filterList.length)})</span>
      </h4>
      <ul>{filterList}</ul>
    </TeamWrap>
  );
};

export default Team;
