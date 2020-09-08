import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import PraiseModal from "@components/modals/praise/PraiseModal";
import Part from "./Part";

const UserListWrap = styled.ul`
  padding: 0px 20px;
  min-height: 100vh;
`;

const UserList = ({ partsData, filterPartsData }) => {
  const [isOpen, setOpen] = useState(false);
  const {
    language: { language, langData },
    searchBar: { value },
  } = useSelector((index) => index);

  const data = value ? filterPartsData : partsData;

  const userList = data.map((partData) => {
    const [partName, teamsData] = partData;
    return <Part key={partName} {...{ language, langData, partName, teamsData, setOpen }} />;
  });

  return (
    <>
      <UserListWrap>{userList}</UserListWrap>
      {isOpen && <PraiseModal {...{ setOpen }} />}
    </>
  );
};

export default UserList;
