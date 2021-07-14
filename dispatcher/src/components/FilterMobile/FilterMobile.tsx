import React from "react";
import { filterIcon } from "../../assets";
import { FilterContainer } from "../../styles/StyledComps";
import Dropdown from "../Dropdown/Dropdown";

export interface FilterMobileProps {}

const FilterMobile: React.FC<FilterMobileProps> = ({}) => {
  return (
    <FilterContainer>
      <Dropdown isSearch={false} />
      <img src={filterIcon} />
    </FilterContainer>
  );
};

export default FilterMobile;
