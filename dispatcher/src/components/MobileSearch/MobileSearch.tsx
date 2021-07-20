import React from "react";
import {
  MobileSearchContainer,
  MobileSearchMain,
} from "../../styles/StyledComps";
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
