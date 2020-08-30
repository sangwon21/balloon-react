import React from "react";
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
  return (
    <LoginWrap>
      <Title />
      <Footer />
    </LoginWrap>
  );
};

export default Login;
