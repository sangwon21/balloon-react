import React from "react";
import styled from "styled-components";
import { partName, teamName } from "@data/languages/part-team-name";

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

const PartBox = ({ language, partData }) => {
  const teamsList = [];
  for (let name in partData[1]) {
    const team = teamName[name] ? teamName[name][language] : name;
    teamsList.push(
      <li key={name}>
        <a href={`#${team}`}>{team}</a>
      </li>,
    );
  }

  const part = partName[partData[0]] ? partName[partData[0]][language] : partData[0];

  return (
    <PartBoxWrap>
      <h3>
        <a href={`#${part}`}>{part}</a>
      </h3>
      <ul>{teamsList}</ul>
    </PartBoxWrap>
  );
};

export default PartBox;
