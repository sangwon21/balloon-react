import React from "react";

import Team from "./Team";

const TeamList = ({ language, langData, teamsData, setShow }) => {
  const teamList = [];

  for (let [teamName, members] of Object.entries(teamsData)) {
    teamList.push(<Team key={teamName} {...{ language, langData, teamName, members, setShow }} />);
  }

  return <>{teamList}</>;
};

export default TeamList;
