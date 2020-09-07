import React from "react";
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
  const filterList = members.map((member) => <Member key={member._id} {...{ member }} />);

  const team = teamNameLangData[teamName] ? teamNameLangData[teamName][language] : teamName;

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
