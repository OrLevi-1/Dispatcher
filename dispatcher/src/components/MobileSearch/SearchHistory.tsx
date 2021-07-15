import React from "react";
import styled from "styled-components";
import MsHeader from "./MsHeader";

export interface SearchHistoryProps {}

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RecentSearches = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  width: 100%;
  height: 100px;
`;
export const HistoryLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SearchHistory: React.FC<SearchHistoryProps> = ({}) => {
  return (
    <HistoryContainer>
      <MsHeader />
      <RecentSearches />
      <HistoryLine />
      <HistoryLine />
      <HistoryLine />
    </HistoryContainer>
  );
};

export default SearchHistory;
