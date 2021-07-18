import React from "react";

import { filterIcon } from "../../assets";
import { FilterContainer, StyledLink } from "../../styles/StyledComps";
import Dropdown from "../Dropdown/Dropdown";

export interface FilterMobileProps {}

const FilterMobile: React.FC<FilterMobileProps> = ({}) => {
  return (
    <FilterContainer>
      <Dropdown isSearch={false} withArrow={true} />
      <StyledLink to="/filter">
        <img src={filterIcon} />
      </StyledLink>
    </FilterContainer>
  );
};

export default FilterMobile;
