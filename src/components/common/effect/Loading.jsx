import React from "react";
import styled from "styled-components";

const LoadingWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  pointer-events: none;
`;

const LoadingImage = styled.div`
  @keyframes ldio-4gm5u4qas6r {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .ldio-4gm5u4qas6r div {
    left: 56.4px;
    top: 28.799999999999997px;
    position: absolute;
    animation: ldio-4gm5u4qas6r linear 1s infinite;
    background: #c4c4c4;
    width: 7.199999999999999px;
    height: 14.399999999999999px;
    border-radius: 3.5999999999999996px / 7.199999999999999px;
    transform-origin: 3.5999999999999996px 31.2px;
  }
  .ldio-4gm5u4qas6r div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.9166666666666666s;
    background: #c4c4c4;
  }
  .ldio-4gm5u4qas6r div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -0.8333333333333334s;
    background: #c4c4c4;
  }
  .ldio-4gm5u4qas6r div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.75s;
    background: #c4c4c4;
  }
  .ldio-4gm5u4qas6r div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.6666666666666666s;
    background: #c4c4c4;
  }
  .ldio-4gm5u4qas6r div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.5833333333333334s;
    background: #c4c4c4;
  }
  .ldio-4gm5u4qas6r div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.5s;
    background: #c4c4c4;
  }
  .ldio-4gm5u4qas6r div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.4166666666666667s;
    background: #c4c4c4;
  }
  .ldio-4gm5u4qas6r div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.3333333333333333s;
    background: #c4c4c4;
  }
  .ldio-4gm5u4qas6r div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.25s;
    background: #c4c4c4;
  }
  .ldio-4gm5u4qas6r div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.16666666666666666s;
    background: #c4c4c4;
  }
  .ldio-4gm5u4qas6r div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.08333333333333333s;
    background: #c4c4c4;
  }
  .ldio-4gm5u4qas6r div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
    background: #c4c4c4;
  }
  .loadingio-spinner-spinner-bqm3sqfhy2m {
    width: 120px;
    height: 120px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-4gm5u4qas6r {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-4gm5u4qas6r div {
    box-sizing: content-box;
  }
`;

const Loading = () => {
  return (
    <LoadingWrap>
      <LoadingImage>
        <div className="loadingio-spinner-spinner-bqm3sqfhy2m">
          <div className="ldio-4gm5u4qas6r">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </LoadingImage>
    </LoadingWrap>
  );
};

export default Loading;
