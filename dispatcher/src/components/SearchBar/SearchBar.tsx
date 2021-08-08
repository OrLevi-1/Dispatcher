import React, { useEffect, useState } from "react";
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
import { filterActions } from "../../store/filter";

export interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const dispatch = useDispatch();
  const [searchEvent, setSearchEvent] = useState({ id: "", category: "" });

  useEffect(() => {
    const timeout = setTimeout(() => {
      searchHandler(searchEvent.id, searchEvent.category);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchEvent]);

  const searchHandler = (id: string, category: string) => {
    if (id !== "") {
      dispatch(searchActions.setSearchTerm(id));
      dispatch(filterActions.addSubFilter({ category, id }));
      localStorage.setItem(id, id);
    } else {
      dispatch(searchActions.setSearchTerm(""));

      dispatch(filterActions.addSubFilter({ category: "q", id: "Israel" }));
      dispatch(
        filterActions.addSubFilter({ category: "sortBy", id: "publishedAt" })
      );
      dispatch(filterActions.addSubFilter({ category: "language", id: "en" }));
    }
  };

  return (
    <SearchContainer>
      <SearchIcon src={searchIcon} />
      <SearchInput
        type="text"
        placeholder="Search"
        onChange={(event) => {
          const id = event.target.value;
          const category = "q";
          setSearchEvent({ id, category });
        }}
      />
      <SearchDivider />
      <Dropdown isSearch={true} withArrow={true} />
    </SearchContainer>
  );
};

export default SearchBar;
