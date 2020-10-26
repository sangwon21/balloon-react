import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import UserListSkeleton from "./UserListSkeleton";
import Part from "./Part";
import PraiseModal from "@components/modals/praise/PraiseModal";
import BalloonLetter from "@components/common/effect/BalloonLetter";

const UserListWrap = styled.ul`
  padding: 0px 20px;
  min-height: 100vh;
`;

const UserList = ({ partsData, filterPartsData, setUserInfoOpen }) => {
  const [isOpen, setOpen] = useState(false);
  const [showSendEffect, setShowSendEffect] = useState(false);
  const {
    language: { language, langData },
    searchBar: { value },
    login: { userData },
  } = useSelector((index) => index);

  if (!userData) return <UserListSkeleton />;

  const data = value ? filterPartsData : partsData;

  const userList = data.map((partData) => {
    const [partName, teamsData] = partData;
    return <Part key={partName} {...{ language, langData, partName, teamsData, setOpen, setUserInfoOpen }} />;
  });

  return (
    <>
      <UserListWrap>{userList}</UserListWrap>
      {isOpen && <PraiseModal {...{ isOpen, setOpen, setShowSendEffect }} />}
      {showSendEffect && <BalloonLetter {...{ setShowSendEffect }} />}
    </>
  );
};

export default UserList;
