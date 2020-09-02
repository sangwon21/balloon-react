import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@modules/page";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import congratulation from "@assets/images/congratulation.jpg";

import ContentWrapper from "@components/common/wrapper/ContentWrap";

const CongratsTopImgBox = styled.div`
  width: 100%;
  height: 250px;
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

const CongratsTopImg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${congratulation}) 100% 550px;
  background-size: cover;
  ::before {
    position: absolute;
    top: 240px;
    display: inline-block;
    content: "";
    width: 100%;
    height: 10px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
`;

const DummyBox = styled.div`
  width: 100%;
  height: 290px;
`;

const Congrats = () => {
  const dispatch = useDispatch();
  const { langData } = useSelector(({ language }) => language);

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
  }, [dispatch]);

  return (
    <ContentWrapper>
      <Helmet>
        <title>{`${langData["L0001"]} - ${langData["L0034"]}`}</title>
      </Helmet>
      <CongratsTopImgBox>
        <CongratsTopImg />
      </CongratsTopImgBox>
      <DummyBox />
    </ContentWrapper>
  );
};

export default Congrats;
