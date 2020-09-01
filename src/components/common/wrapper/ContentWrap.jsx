import React from "react";
import styled from "styled-components";

const ContentWrapOuter = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const ContentWrapInner = styled.div`
  width: 1400px;
  margin: 0 auto;
  .title {
    font-size: 30px;
    font-weight: 600;
    padding: 30px 0;
  }
  .content {
    border: 1px solid #e6e6e6;
    background-color: #f9f9f9;
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
