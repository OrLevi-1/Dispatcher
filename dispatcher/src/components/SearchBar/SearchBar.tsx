import React, { useState } from "react";
import { searchIcon } from "../../assets";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";

import Dropdown from "../Dropdown/Dropdown";
import {
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchDivider,
} from "./StyledSearchBar";
import { searchActions } from "../../store/search";

export interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  return (
    <SearchContainer>
      <SearchIcon src={searchIcon} />
      <SearchInput
        type="text"
        placeholder="Search"
        onChange={(event) => {
          dispatch(searchActions.setSearchTerm(event.target.value));
          console.log(search);
        }}
      />
      <SearchDivider />
      <Dropdown isSearch={true} withArrow={true} />
    </SearchContainer>
  );
};

export default SearchBar;
