import React from "react";
import { useSelector } from "react-redux";
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

const Team = ({ language, langData, teamName, members, setUserInfoOpen }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { messagesData } = useSelector(({ login }) => login);
  const receivers = messagesData.map((data) => data.receiverEmail);

  const team = teamNameLangData[teamName] ? teamNameLangData[teamName][language] : teamName;

  const _filterList = members.filter((member) => receivers.includes(member.email));
  const filterList = _filterList.map((member) => {
    return <Member key={member._id} {...{ member, setUserInfoOpen, inView }} />;
  });
  filterList.sort((a, b) => {
    return a.props.member.name < b.props.member.name ? -1 : a.props.member.name > b.props.member.name ? 1 : 0;
  });

  if (!_filterList.length) return null;

  return (
    <TeamWrap ref={ref}>
      <h4 id={team.trim()}>
        {team} <span>({langData["L0016"].replace("%s", _filterList.length)})</span>
      </h4>
      <ul>{filterList}</ul>
    </TeamWrap>
  );
};

export default Team;
