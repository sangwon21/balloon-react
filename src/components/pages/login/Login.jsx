import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "@modules/page";
import styled from "styled-components";

import Title from "./Title";
import Footer from "./Footer";

const LoginWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #70bbd9;
`;

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
  }, []);

  return (
    <LoginWrap>
      <Title />
      <Footer />
    </LoginWrap>
  );
};

export default Login;
