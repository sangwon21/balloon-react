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

const PartBox = ({ language, part, teams }) => {
  const teamsList = teams.map((team) => (
    <li key={team[language]}>
      <a href={`#${team[language]}`}>{team[language]}</a>
    </li>
  ));

  return (
    <PartBoxWrap>
      <h3>
        <a href={`#${part[language]}`}>{part[language]}</a>
      </h3>
      <ul>{teamsList}</ul>
    </PartBoxWrap>
  );
};

export default PartBox;
