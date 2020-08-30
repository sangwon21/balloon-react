import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "@modules/page";
import styled from "styled-components";

const UsersWrap = styled.div`
  position: relative;
`;

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
  }, [dispatch]);

  return <UsersWrap></UsersWrap>;
};

export default Users;
