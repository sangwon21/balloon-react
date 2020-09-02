import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@modules/page";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import ContentWrapper from "@components/common/wrapper/ContentWrap";
import Tabs from "@components/common/wrapper/Tabs";
import PartList from "./PartList";
import UserList from "./UserList";
import PraiseList from "./PraiseList";

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
  span {
    line-height: 94px;
    color: ${({ selected }) => (selected ? "#1f8ecd" : "#555")};
    font-size: 16px;
    font-weight: ${({ selected }) => (selected ? "600" : "500")};
  }
`;

const Users = () => {
  const dispatch = useDispatch();
  const { langData } = useSelector(({ language }) => language);

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
  }, [dispatch]);

  return (
    <ContentWrapper>
      <Helmet>
        <title>{`${langData["L0001"]} - ${langData["L0033"]}`}</title>
      </Helmet>
      <UsersWrap>
        <PartList />
        <TabsMenuWrap>
          <Tabs {...{ TabButtonWrap, TabButton }}>
            <UserList title={langData["L0017"]} />
            <PraiseList title={langData["L0018"]} />
          </Tabs>
        </TabsMenuWrap>
      </UsersWrap>
    </ContentWrapper>
  );
};

export default Users;
