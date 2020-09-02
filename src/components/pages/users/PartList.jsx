import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import PartBox from "./PartBox";

const PartListWrap = styled.div`
  position: relative;
  width: 240px;
  padding: 20px;
  border-right: 1px solid #e6e6e6;
  box-sizing: border-box;
`;

const PartListTitle = styled.h2`
  border-bottom: 1px solid #e6e6e6;
  margin: 0 -20px;
  padding: 0 20px 15px;
  font-size: 30px;
  height: 60px;
  line-height: 60px;
  color: #252525;
`;

const PartList = () => {
  const { langData } = useSelector(({ language }) => language);

  return (
    <PartListWrap>
      <PartListTitle>{langData["L0015"]}</PartListTitle>
      <PartBox />
    </PartListWrap>
  );
};

export default PartList;