import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "@modules/searchBar";
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
  const dispatch = useDispatch();
  const {
    language: { langData },
    page: { currentPage },
    searchBar: { value },
  } = useSelector((index) => index);

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(changeValue(""));
  };

  const handleChange = ({ target: { value } }) => dispatch(changeValue(value));

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
