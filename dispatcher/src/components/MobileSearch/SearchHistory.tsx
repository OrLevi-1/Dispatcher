import React from "react";
import { xbutton } from "../../assets";
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
} from "../../styles/StyledComps";

export interface SearchHistoryProps {}

const SearchHistory: React.FC<SearchHistoryProps> = ({}) => {
  return (
    <HistoryContainer>
      <RecentSearches>
        <RecentSearchesText>RECENT SEARCHES</RecentSearchesText>
        <RecentSearchesButton>CLEAR</RecentSearchesButton>
      </RecentSearches>
      <HistoryDiv>
        <HistoryLine>
          <HistoryText>Crypto</HistoryText>
          <HistoryDelete src={xbutton} />
        </HistoryLine>
        <HistoryDivider />
        <HistoryLine>
          <HistoryText>japan</HistoryText>
          <HistoryDelete src={xbutton} />
        </HistoryLine>
        <HistoryDivider />
        <HistoryLine>
          <HistoryText>soccer</HistoryText>
          <HistoryDelete src={xbutton} />
        </HistoryLine>
        <HistoryDivider />
      </HistoryDiv>
    </HistoryContainer>
  );
};

export default SearchHistory;
