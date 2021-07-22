import React from "react";
import { searchIcon } from "../../assets";
import Dropdown from "../Dropdown/Dropdown";
import {
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchDivider,
} from "./StyledSearchBar";

export interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  return (
    <SearchContainer>
      <SearchIcon src={searchIcon} />
      <SearchInput placeholder="Search" />
      <SearchDivider />
      <Dropdown isSearch={true} withArrow={true} />
    </SearchContainer>
  );
};

export default SearchBar;
