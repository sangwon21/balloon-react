import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetToast } from "@modules/toast";
import useSetTimeout from "@hooks/useSetTimeout";
import styled from "styled-components";
import { TOAST_TYPE } from "@constants/constant";

const ToastWrap = styled.div`
  position: fixed;
  top: 100px;
  left: 100px;
  width: 300px;
  height: 50px;
  background-color: ${({ type }) => (type === TOAST_TYPE.NOMAL ? "#0f0" : "#f00")};
  z-index: 100;
`;

const Toast = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector(({ toast }) => toast);

  const DURATION = 3000;

  useSetTimeout(() => {
    dispatch(resetToast());
  }, DURATION);

  return <ToastWrap type={type}>{message}</ToastWrap>;
};

export default Toast;
