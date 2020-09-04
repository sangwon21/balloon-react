import React from "react";
import styled from "styled-components";

import Part from "./Part";

const UserListWrap = styled.ul`
  padding: 0px 20px;
`;

const UserList = ({ partsData }) => {
  const userList = partsData.map((partData) => {
    const [partName, teamsData] = partData;
    return <Part key={partName} {...{ partName, teamsData }} />;
  });

  return <UserListWrap>{userList}</UserListWrap>;
};

export default UserList;
