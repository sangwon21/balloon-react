import React from "react";
import styled from "styled-components";
import { teamNameLangData } from "@data/languages/part-team-name";
import { useInView } from "react-intersection-observer";

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

const Team = ({ language, langData, teamName, members, setOpen, setUserInfoOpen }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const filterList = members.map((member) => <Member key={member._id} {...{ member, setOpen, setUserInfoOpen, inView }} />);
  filterList.sort((a, b) => {
    return a.props.member.name < b.props.member.name ? -1 : a.props.member.name > b.props.member.name ? 1 : 0;
  });

  const team = teamNameLangData[teamName] ? teamNameLangData[teamName][language] : teamName;

  return (
    <TeamWrap ref={ref}>
      <h4 id={team}>
        {team} <span>({langData["L0016"].replace("%s", filterList.length)})</span>
      </h4>
      <ul>{filterList}</ul>
    </TeamWrap>
  );
};

export default Team;
