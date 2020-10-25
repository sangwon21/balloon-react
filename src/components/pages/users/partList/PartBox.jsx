import React from "react";
import styled from "styled-components";
import { partNameLangData, teamNameLangData } from "@data/languages/part-team-name";
import { IoMdArrowDropright } from "react-icons/io";

const PartBoxWrap = styled.li`
  padding-top: 20px;
  color: #333;
  h3 {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 16px;
  }
  ul {
    margin-left: 30px;
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
  :first-child {
    padding-top: 5px;
  }
  :last-child {
    padding-bottom: 20px;
  }
`;

const PartBox = ({ language, partName, teamsData }) => {
  const teamList = [];
  for (let name in teamsData) {
    const team = teamNameLangData[name] ? teamNameLangData[name][language] : name;
    teamList.push(
      <li key={name}>
        <a href={`#${team}`}>{team}</a>
      </li>,
    );
  }
  teamList.sort((a, b) => {
    if (partName === "해외법인") return -1;
    return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
  });

  const part = partNameLangData[partName] ? partNameLangData[partName][language] : partName;

  return (
    <PartBoxWrap>
      <h3>
        <IoMdArrowDropright /> <a href={`#${part}`}>{part}</a>
      </h3>
      <ul>{teamList}</ul>
    </PartBoxWrap>
  );
};

export default PartBox;
