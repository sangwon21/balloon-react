import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "@modules/searchBar";
import { changeSelectedTab, filterUsersData } from "@modules/users";
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
  const timeId = useRef();
  const {
    language: { langData },
    page: { currentPage },
    searchBar: { value },
    users: { usersData },
  } = useSelector((index) => index);
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(changeValue());
  };

  const handleChange = ({ target: { value } }) => {
    setText(value);
    if (timeId.current) clearTimeout(timeId.current);

    timeId.current = setTimeout(() => {
      dispatch(changeValue(value));
      if (currentPage === "/users") {
        return dispatch(filterUsersData(usersData, value));
      }
    }, 300);
  };

  const handleFocus = () => {
    if (currentPage === "/users") return dispatch(changeSelectedTab());
  };

  const searchMenu = searchMenus[currentPage];

  if (!searchMenu) return null;

  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <SearchInput type="text" value={text} onFocus={handleFocus} onChange={handleChange} placeholder={langData[searchMenu.placeholder]} />
      <BiSearch className="search-icon" />
    </SearchBarForm>
  );
};

export default SearchBar;
