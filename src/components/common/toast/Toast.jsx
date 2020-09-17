import React, { useState, useEffect } from "react";
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
  font-size: 16px;
  background-color: ${({ type }) => (type === TOAST_TYPE.NOMAL ? "#2ecc71" : "#e74c3c")};
  z-index: 100;
  border-radius: 4px;
  color: #fff;
  opacity: 0.7;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
  text-align: center;

  animation-name: toastAnim;
  animation-duration: ${({ animDuration }) => `${animDuration}ms`};
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

  &.hide {
    animation-name: toastHideAnim;
    animation-duration: ${({ animDuration }) => `${animDuration}ms`};
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    overflow: hidden;
    @keyframes toastHideAnim {
      0% {
        height: 60px;
      }
      100% {
        height: 0;
      }
    }
  }

  &.reset {
    animation-name: toastResetAnim;
    animation-duration: ${({ animDuration }) => `${animDuration}ms`};
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    overflow: hidden;
    @keyframes toastResetAnim {
      0% {
        height: 60px;
      }
      30% {
        height: 0px;
      }
      100% {
        height: 60px;
      }
    }
  }
`;

const Toast = () => {
  const dispatch = useDispatch();
  const { number, message, type } = useSelector(({ toast }) => toast);
  const [className, setClassName] = useState("");

  const DURATION = 3000;
  const ANIM_DURATION = 200;

  useSetTimeout(() => {
    setClassName("hide");
    setTimeout(() => {
      dispatch(resetToast());
    }, ANIM_DURATION);
  }, DURATION);

  useEffect(() => {
    if (number > 1) {
      setClassName("reset");
      setTimeout(() => {
        setClassName("");
      }, ANIM_DURATION);
    }
  }, [number]);

  return (
    <ToastWrap animDuration={ANIM_DURATION} className={className} type={type}>
      {message}
    </ToastWrap>
  );
};

export default Toast;
