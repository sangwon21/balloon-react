import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Part from "./Part";

const UserListWrap = styled.ul`
  padding: 0px 20px;
  min-height: 100vh;
`;

const UserList = ({ partsData, filterPartsData }) => {
  const {
    language: { language, langData },
    searchBar: { value },
  } = useSelector((index) => index);

  const data = value ? filterPartsData : partsData;

  const userList = data.map((partData) => {
    const [partName, teamsData] = partData;
    return <Part key={partName} {...{ language, langData, partName, teamsData }} />;
  });

  return <UserListWrap>{userList}</UserListWrap>;
};

export default UserList;
