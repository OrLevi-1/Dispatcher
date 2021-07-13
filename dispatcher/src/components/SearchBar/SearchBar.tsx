import React from "react";
import { searchIcon } from "../../assets";
import Dropdown from "../Dropdown/Dropdown";
import {
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchDivider,
} from "../../styles/StyledComps";

export interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  return (
    <SearchContainer>
      <SearchIcon src={searchIcon} />
      <SearchInput placeholder="Search" />
      <SearchDivider />
      <Dropdown />
    </SearchContainer>
  );
};

export default SearchBar;
