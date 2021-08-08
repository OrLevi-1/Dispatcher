import React from "react";
import { filterIcon } from "../../assets";
import Dropdown from "../Dropdown/Dropdown";
import { FilterContainer } from "./StyledFilterMobile";

export interface FilterMobileProps {
  onFilterClick: (isClick: boolean) => void;
}

const FilterMobile: React.FC<FilterMobileProps> = ({ onFilterClick }) => {
  return (
    <FilterContainer>
      <Dropdown isSearch={true} withArrow={true} />
      <Dropdown isSearch={false} withArrow={false} mainTitle={"Prev"} />
      <Dropdown isSearch={false} withArrow={false} mainTitle={"Next"} />
      <img
        src={filterIcon}
        onClick={() => {
          onFilterClick(true);
        }}
      />
    </FilterContainer>
  );
};

export default FilterMobile;
