import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { xbutton } from "../../assets";
import { searchActions } from "../../store/search";
import { RootState } from "../../store/store";
import {
  HistoryContainer,
  RecentSearches,
  RecentSearchesText,
  RecentSearchesButton,
  HistoryDiv,
  HistoryLine,
  HistoryText,
  HistoryDelete,
  HistoryDivider,
} from "./StyledMobileSearch";

export interface SearchHistoryProps {}

const SearchHistory: React.FC<SearchHistoryProps> = ({}) => {
  const searchList: string[] = [];
  const dispatch = useDispatch();
  const [searches, setSearches] = useState(searchList);
  const lastSearch = useSelector((state: RootState) => state.search.searchTerm);
  const searchArray = useSelector(
    (state: RootState) => state.search.searchArray
  );

  useEffect(() => {
    setSearches(searchArray.slice(1));
    console.log(searchArray);
  }, [lastSearch]);

  const deleteItem = (val: string) => {
    console.log(val);
    const index = searchArray.indexOf(val);
    console.log(index);
    const tempList = [...searches];

    if (index !== -1) {
      dispatch(searchActions.removeArrayTerm(index));
      tempList.splice(index - 1, 1);
      setSearches(tempList);
    }
  };

  const deleteAll = () => {
    setSearches(searchList);
    dispatch(searchActions.clearArrayTerm());
  };

  return (
    <HistoryContainer>
      <RecentSearches>
        <RecentSearchesText>RECENT SEARCHES</RecentSearchesText>
        <RecentSearchesButton
          onClick={() => {
            deleteAll();
          }}
        >
          CLEAR
        </RecentSearchesButton>
      </RecentSearches>
      <HistoryDiv>
        {searches.map((val, index) => (
          <div key={index}>
            <HistoryLine>
              <HistoryText>{val}</HistoryText>
              <HistoryDelete src={xbutton} onClick={() => deleteItem(val)} />
            </HistoryLine>
            <HistoryDivider />
          </div>
        ))}
      </HistoryDiv>
    </HistoryContainer>
  );
};

export default SearchHistory;
