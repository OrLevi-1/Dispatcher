import React from "react";
import { MobileSearchContainer, MobileSearchMain } from "./StyledMobileSearch";
import MsHeader from "./MsHeader";
import SearchHistory from "./SearchHistory";
import MainNewsBody from "../Home/MainNewsBody";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export interface MobileSearchProps {
  onBackClick: (isClick: boolean) => void;
}

const MobileSearch: React.FC<MobileSearchProps> = ({ onBackClick }) => {
  const searching = useSelector((state: RootState) => state.search);

  return (
    <MobileSearchMain>
      <MobileSearchContainer>
        <MsHeader onBackClick={onBackClick} />
        {searching.searchTerm ? <MainNewsBody /> : <SearchHistory />}
      </MobileSearchContainer>
    </MobileSearchMain>
  );
};

export default MobileSearch;
