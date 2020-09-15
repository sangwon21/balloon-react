import React from "react";
import styled from "styled-components";

const ToastWrap = styled.div`
  position: fixed;
  top: 100px;
  left: 100px;
  width: 100px;
  height: 50px;
  background-color: #0f0;
`;

const Toast = () => {
  return <ToastWrap></ToastWrap>;
};

export default Toast;
