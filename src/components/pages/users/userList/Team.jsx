import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { teamNameLangData } from "@data/languages/part-team-name";

import Member from "./Member";
import Filter from "./Filter";

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

const Team = ({ language, langData, teamName, members, setShow }) => {
  const { value } = useSelector(({ searchBar }) => searchBar);

  const checkFilterCondition = (member) => {
    if (member.name.toLowerCase().includes(value.toLowerCase())) return true;
    if (member.englishName && member.englishName.toLowerCase().includes(value.toLowerCase())) return true;
    return false;
  };

  const filterList = members.filter((member) => checkFilterCondition(member)).map((member) => <Member key={member._id} {...{ member }} />);

  useEffect(() => {
    if (!filterList.length) setShow(false);
  }, [filterList.length, setShow]);

  if (!filterList.length) return null;

  const team = teamNameLangData[teamName] ? teamNameLangData[teamName][language] : teamName;

  return (
    <TeamWrap>
      <h4 id={team}>
        {team} <span>({langData["L0016"].replace("%s", filterList.length)})</span>
      </h4>
      <Filter {...{ filterList, setShow, value }} />
    </TeamWrap>
  );
};

export default Team;
