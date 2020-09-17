import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetToast } from "@modules/toast";
import useSetTimeout from "@hooks/useSetTimeout";
import styled from "styled-components";
import { TOAST_TYPE } from "@constants/constant";

const ToastWrap = styled.div`
  position: fixed;
  top: 100px;
  right: 30px;
  width: 250px;
  height: 60px;
  line-height: 60px;
  background-color: ${({ type }) => (type === TOAST_TYPE.NOMAL ? "#2ecc71" : "#e74c3c")};
  z-index: 100;
  border-radius: 4px;
  color: #fff;
  opacity: 0.7;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
  text-align: center;

  animation-name: toastAnim;
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  overflow: hidden;
  @keyframes toastAnim {
    0% {
      height: 0;
    }
    100% {
      height: 60px;
    }
  }
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
