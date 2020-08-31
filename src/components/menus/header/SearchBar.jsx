import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

import { searchMenus } from "@data/menus/nav";

const SearchBarForm = styled.form`
  position: relative;
  margin-top: 3px;
  padding: 0 15px;
  .search-icon {
    position: absolute;
    top: 5px;
    right: -5px;
    color: #fff;
    font-size: 18px;
  }
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  outline: none;
  width: 148px;
  height: 26px;
  color: #fff;
  font-size: 14px;
  box-sizing: border-box;
  ::placeholder {
    color: #ffffffd6;
  }
`;

const SearchBar = () => {
  const [value, setValue] = useState("");
  const {
    language: { langData },
    page: { currentPage },
  } = useSelector((index) => index);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue("");
  };

  const handleChange = ({ target: { value } }) => setValue(value);

  const searchMenu = searchMenus[currentPage];

  if (!searchMenu) return null;

  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <SearchInput type="text" value={value} onChange={handleChange} placeholder={langData[searchMenu.placeholder]} />
      <BiSearch className="search-icon" />
    </SearchBarForm>
  );
};

export default SearchBar;
