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

const PartListTreeWrap = styled.ul`
  overflow-y: auto;
  &.fixed {
    position: fixed;
    top: 60px;
    width: 219px;
    height: calc(100vh - 100px);
    overflow-y: auto;
    :first-child {
      padding-top: 10px;
    }
    &.small {
      height: calc(100vh - 131px);
    }
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #d4d4d4;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
`;

const PartList = ({ partsData }) => {
  const documentRef = useRef(document);
  const [pageY, setPageY] = useState(0);
  const { language } = useSelector(({ language }) => language);

  const handleScroll = () => {
    const { pageYOffset } = window;
    setPageY(pageYOffset);
  };

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () => documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  const partList = partsData.map((partData) => {
    const [partName, teamsData] = partData;
    return <PartBox key={partName} {...{ language, partName, teamsData }} />;
  });

  const className = pageY < 40 ? "" : document.body.scrollHeight - window.visualViewport.height - 20 >= pageY ? "fixed" : "fixed small";

  return (
    <PartListWrap>
      <PartListTreeWrap className={className}>{partList}</PartListTreeWrap>
    </PartListWrap>
  );
};

export default PartList;
