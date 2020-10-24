import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@modules/page";
import { changeSelectedTab, getUsersData } from "@modules/users";
import { changeValue } from "@modules/searchBar";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import ContentWrapper from "@components/common/wrapper/ContentWrap";
import Tabs from "@components/common/wrapper/Tabs";
import PartList from "./partList/PartList";
import UserList from "./userList/UserList";
import PraiseList from "./praiseList/PraiseList";
import UserInfoModal from "@components/modals/userInfo/UserInfoModal";

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
  height: 80px;
  display: flex;
  justify-content: center;
  border-top-right-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

const TabButton = styled.li`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 2px solid ${({ selected, theme }) => (selected ? theme.backgroundColor.sub : "transparent")};
  color: ${({ selected, theme }) => (selected ? theme.backgroundColor.sub : "#555")};
  transition: color 0.3s;
  span {
    line-height: 94px;
    font-size: 15px;
    font-weight: ${({ selected }) => (selected ? "600" : "500")};
  }
  :hover {
    color: ${({ theme }) => theme.backgroundColor.sub};
  }
`;

const Users = () => {
  const [userInfoOpen, setUserInfoOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    language: { langData },
    users: { selectedTab, usersData, partsData, filterPartsData },
  } = useSelector((index) => index);

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
    dispatch(changeValue());
    if (!usersData.length) dispatch(getUsersData());
  }, []);

  const setSelectedTab = (tabIndex) => dispatch(changeSelectedTab(tabIndex));

  return (
    <ContentWrapper>
      <Helmet>
        <title>{`${langData["L0001"]} - ${langData["L0033"]}`}</title>
      </Helmet>
      <UsersWrap>
        <PartList {...{ partsData }} />
        <TabsMenuWrap>
          <Tabs {...{ TabButtonWrap, TabButton, selectedTab, setSelectedTab }}>
            <UserList title={langData["L0017"]} {...{ partsData, filterPartsData, setUserInfoOpen }} />
            <PraiseList title={langData["L0018"]} {...{ partsData, setUserInfoOpen }} />
          </Tabs>
        </TabsMenuWrap>
        {userInfoOpen && <UserInfoModal {...{ isOpen: userInfoOpen, setOpen: setUserInfoOpen }} />}
      </UsersWrap>
    </ContentWrapper>
  );
};

export default Users;
