import React from "react";
import styled from "styled-components";
import { teamNameLangData } from "@data/languages/part-team-name";

const TeamWrap = styled.div`
  h4 {
    color: #aaa;
    font-size: 14px;
    margin: 10px 0;
  }
`;

const Team = ({ language, langData, teamName, members }) => {
  const team = teamNameLangData[teamName] ? teamNameLangData[teamName][language] : teamName;

  return (
    <TeamWrap>
      <h4 id={team}>
        {team} <span>({langData["L0016"].replace("%s", members.length)})</span>
      </h4>
    </TeamWrap>
  );
};

export default Team;
