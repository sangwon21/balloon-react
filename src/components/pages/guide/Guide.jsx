import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "@modules/page";
import styled from "styled-components";

import ContentWrapper from "@components/common/wrapper/ContentWrap";

const Guide = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
  }, [dispatch]);

  return (
    <ContentWrapper title={"가이드"}>
      <div>TEST</div>
    </ContentWrapper>
  );
};

export default Guide;
