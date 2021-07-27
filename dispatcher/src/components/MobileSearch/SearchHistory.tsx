import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { xbutton } from "../../assets";
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
  const [searches, setSearches] = useState(searchList);
  const lastSearch = useSelector((state: RootState) => state.search);

  useEffect(() => {
    setSearches([...searches, lastSearch.searchTerm]);
    console.log(searches);
  }, [lastSearch]);

  const deleteItem = (val: string) => {
    const tempList = [...searches];
    const index = tempList.indexOf(val);
    if (index !== -1) {
      tempList.splice(index, 1);
      setSearches(tempList);
    }
  };

  const deleteAll = () => {
    const tempList = [...searches];
    tempList.splice(1, tempList.length);
    setSearches(tempList);
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
        {searches.slice(1).map((val, index) => (
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
