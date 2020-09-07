import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import PartList from "./PartList";

const UserListWrap = styled.ul`
  padding: 0px 20px;
  min-height: 100vh;
`;

const UserList = ({ partsData }) => {
  const { language, langData } = useSelector(({ language }) => language);

  const userList = partsData.map((partData) => {
    const [partName, teamsData] = partData;
    return <PartList key={partName} {...{ language, langData, partName, teamsData }} />;
  });

  return <UserListWrap>{userList}</UserListWrap>;
};

export default UserList;
