import React from "react";

import { filterIcon } from "../../assets";

import Dropdown from "../Dropdown/Dropdown";
import { StyledLink } from "../../styles/StyledComps";
import { FilterContainer } from "./StyledFilterMobile";

export interface FilterMobileProps {
  onFilterClick: (isClick: boolean) => void;
}

const FilterMobile: React.FC<FilterMobileProps> = ({ onFilterClick }) => {
  return (
    <FilterContainer>
      <Dropdown isSearch={false} withArrow={true} />
      {/* <StyledLink to="/filter"> */}
      <img
        src={filterIcon}
        onClick={() => {
          onFilterClick(true);
        }}
      />
      {/* </StyledLink> */}
    </FilterContainer>
  );
};

export default FilterMobile;
