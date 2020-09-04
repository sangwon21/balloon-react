import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@modules/page";
import { getUsersData } from "@modules/users";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import ContentWrapper from "@components/common/wrapper/ContentWrap";
import Tabs from "@components/common/wrapper/Tabs";
import PartList from "./partList/PartList";
import UserList from "./userList/UserList";
import PraiseList from "./praiseList/PraiseList";

const UsersWrap = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const TabsMenuWrap = styled.div`
  width: calc(100% - 240px);
`;

const TabButtonWrap = styled.ul`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  border-top-right-radius: 2px;
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
`;

const TabButton = styled.li`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 2px solid ${({ selected }) => (selected ? "#1f8ecd" : "transparent")};
  color: ${({ selected }) => (selected ? "#1f8ecd" : "#555")};
  transition: color 0.3s;
  span {
    line-height: 94px;
    font-size: 16px;
    font-weight: ${({ selected }) => (selected ? "600" : "500")};
  }
  :hover {
    color: #1f8ecd;
  }
`;

const Users = () => {
  const dispatch = useDispatch();
  const {
    language: { langData },
    users: { usersData, partsData },
  } = useSelector((index) => index);

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
    if (!usersData.length) dispatch(getUsersData());
  }, [dispatch, usersData.length]);

  return (
    <ContentWrapper>
      <Helmet>
        <title>{`${langData["L0001"]} - ${langData["L0033"]}`}</title>
      </Helmet>
      <UsersWrap>
        <PartList {...{ partsData }} />
        <TabsMenuWrap>
          <Tabs {...{ TabButtonWrap, TabButton }}>
            <UserList title={langData["L0017"]} {...{ partsData }} />
            <PraiseList title={langData["L0018"]} {...{ partsData }} />
          </Tabs>
        </TabsMenuWrap>
      </UsersWrap>
    </ContentWrapper>
  );
};

export default Users;
