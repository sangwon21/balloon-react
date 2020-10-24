import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@modules/page";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Title from "./Title";
import Footer from "./Footer";

const LoginWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor.main};
`;

const Login = () => {
  const dispatch = useDispatch();
  const { langData } = useSelector(({ language }) => language);

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
  }, [dispatch]);

  return (
    <LoginWrap>
      <Helmet>
        <title>
          {langData["L0001"]} - {langData["L0032"]} ^^
        </title>
      </Helmet>
      <Title />
      <Footer />
    </LoginWrap>
  );
};

export default Login;
