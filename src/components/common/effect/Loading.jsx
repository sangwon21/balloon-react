import React from "react";
import styled from "styled-components";

import simpleLoading from "@assets/images/simple-loading.svg";

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

const Loading = () => {
  return (
    <LoadingWrap>
      <img src={simpleLoading} alt="loading img" />
    </LoadingWrap>
  );
};

export default Loading;
