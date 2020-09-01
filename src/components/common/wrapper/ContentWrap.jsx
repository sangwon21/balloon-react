import React from "react";
import styled from "styled-components";

const ContentWrapOuter = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const ContentWrapInner = styled.div`
  width: 1365px;
  margin: 0 auto;
  position: relative;
  .title {
    color: #252525;
    font-size: 30px;
    padding-top: 40px;
  }
  .content {
    margin-top: 40px;
    padding: 25px 24px;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    border-radius: 2px;
  }
`;

const ContentWrap = ({ children, title }) => {
  return (
    <ContentWrapOuter>
      <ContentWrapInner>
        {title && <h2 className="title">{title}</h2>}
        <div className="content">{children}</div>
      </ContentWrapInner>
    </ContentWrapOuter>
  );
};

export default ContentWrap;
