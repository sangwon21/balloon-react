import React from "react";
import styled from "styled-components";

const PartBoxWrap = styled.div`
  padding-top: 20px;
  color: #333;
  h3 {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 16px;
  }
  ul {
    margin-left: 15px;
  }
  li {
    font-size: 14px;
    margin: 6px 0;
  }
  a {
    color: #333;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  :last-child {
    padding-bottom: 20px;
  }
`;

const PartBox = () => {
  return (
    <PartBoxWrap>
      <h3>
        <a href="#">해외법인</a>
      </h3>
      <ul>
        <li>
          <a href="#">중국법인</a> (2명)
        </li>
        <li>
          <a href="#">일본법인</a> (24명)
        </li>
      </ul>
    </PartBoxWrap>
  );
};

export default PartBox;
