import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@modules/page";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import ContentWrapper from "@components/common/wrapper/ContentWrap";
import PartList from "./PartList";

const UsersWrap = styled.div`
  position: relative;
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
      </UsersWrap>
    </ContentWrapper>
  );
};

export default Users;
