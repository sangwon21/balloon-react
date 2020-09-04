import React from "react";
import styled from "styled-components";
import { teamNameLangData } from "@data/languages/part-team-name";

const TeamWrap = styled.div`
  h4 {
    color: #aaa;
    font-size: 14px;
    margin: 10px 0;
  }
  ul {
    margin-bottom: 20px;
  }
`;

const MemberBox = styled.li``;

const Team = ({ language, langData, teamName, members }) => {
  const team = teamNameLangData[teamName] ? teamNameLangData[teamName][language] : teamName;
  const memberList = members.map((member) => {
    return <MemberBox key={member._id}>{member.name}</MemberBox>;
  });

  return (
    <TeamWrap>
      <h4 id={team}>
        {team} <span>({langData["L0016"].replace("%s", members.length)})</span>
      </h4>
      <ul>{memberList}</ul>
    </TeamWrap>
  );
};

export default Team;
