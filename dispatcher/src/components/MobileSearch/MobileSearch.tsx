import React from "react";
import styled from "styled-components";
import SearchHistory from "./SearchHistory";
export interface MobileSearchProps {}

export const MobileSearchContainer = styled.div`
  display: flex;
  background-color: #e5e5e5;
  flex-direction: column;
  margin: 15px;
`;

const MobileSearch: React.FC<MobileSearchProps> = ({}) => {
  return (
    <MobileSearchContainer>
      <SearchHistory />
    </MobileSearchContainer>
  );
};

export default MobileSearch;
