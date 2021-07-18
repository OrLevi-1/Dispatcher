import React from "react";
import { MobileSearchContainer } from "../../styles/StyledComps";
import MsHeader from "./MsHeader";
import SearchHistory from "./SearchHistory";

export interface MobileSearchProps {}

const MobileSearch: React.FC<MobileSearchProps> = ({}) => {
  return (
    <MobileSearchContainer>
      <MsHeader />
      <SearchHistory />
    </MobileSearchContainer>
  );
};

export default MobileSearch;
