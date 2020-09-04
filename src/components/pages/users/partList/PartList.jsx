import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import PartBox from "./PartBox";

const PartListWrap = styled.div`
  position: relative;
  width: 240px;
  padding: 20px 0 20px 20px;
  border-right: 1px solid #e6e6e6;
  box-sizing: border-box;
`;

const PartListTitle = styled.h2`
  border-bottom: 1px solid #e6e6e6;
  margin: 0 -20px;
  padding: 0 20px 15px;
  font-size: 30px;
  height: 60px;
  line-height: 40px;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  color: #252525;
`;

const PartListTreeWrap = styled.div`
  &.fixed {
    position: fixed;
    top: 60px;
    width: 240px;
    margin-left: -21px;
    height: calc(100vh - 100px);
    overflow-y: auto;
    background-color: #f9f9f9;
    border-left: 1px solid #e6e6e6;
    h3 {
      margin-left: 20px;
    }
    ul {
      margin-left: 35px;
    }
  }
`;

const PartList = ({ partsData }) => {
  const documentRef = useRef(document);
  const [pageY, setPageY] = useState(0);
  const { language, langData } = useSelector(({ language }) => language);

  const handleScroll = () => {
    const { pageYOffset } = window;
    setPageY(pageYOffset);
  };

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  const partList = partsData.map((partData) => {
    const [partName, teamsData] = partData;
    return <PartBox key={partName} {...{ language, partName, teamsData }} />;
  });

  const className = pageY >= 120 ? "fixed" : "";

  return (
    <PartListWrap>
      <PartListTitle>{langData["L0015"]}</PartListTitle>
      <PartListTreeWrap className={className}>{partList}</PartListTreeWrap>
    </PartListWrap>
  );
};

export default PartList;
