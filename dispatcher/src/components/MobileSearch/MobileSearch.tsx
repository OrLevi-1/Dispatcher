import React from "react";
import { MobileSearchContainer, MobileSearchMain } from "./StyledMobileSearch";
import MsHeader from "./MsHeader";
import SearchHistory from "./SearchHistory";

export interface MobileSearchProps {}

const MobileSearch: React.FC<MobileSearchProps> = ({}) => {
  return (
    <MobileSearchMain>
      <MobileSearchContainer>
        <MsHeader />
        <SearchHistory />
      </MobileSearchContainer>
    </MobileSearchMain>
  );
};

export default MobileSearch;
