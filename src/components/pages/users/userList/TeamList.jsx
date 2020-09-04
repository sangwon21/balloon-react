import React from "react";

import Team from "./Team";

const TeamList = ({ teamsData }) => {
  const teamList = [];

  for (let [teamName, members] of Object.entries(teamsData)) {
    teamList.push(<Team key={teamName} {...{ teamName, members }} />);
  }

  return <>{teamList}</>;
};

export default TeamList;
