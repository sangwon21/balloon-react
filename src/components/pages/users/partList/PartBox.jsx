import React from "react";
import styled from "styled-components";
import { partNameLangData, teamNameLangData } from "@data/languages/part-team-name";

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
    display: inline-block;
    width: 80%;
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

const PartBox = ({ language, partName, teamsData }) => {
  const teamsList = [];
  for (let name in teamsData) {
    const team = teamNameLangData[name] ? teamNameLangData[name][language] : name;
    teamsList.push(
      <li key={name}>
        <a href={`#${team}`}>{team}</a>
      </li>,
    );
  }

  const part = partNameLangData[partName] ? partNameLangData[partName][language] : partName;

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
