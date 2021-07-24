import React from "react";
import { blueArrow } from "../../assets";
import Dropdown from "../Dropdown/Dropdown";
import {
  FilterMobileContainer,
  FilterSubText,
  FilterBackArrow,
  FilterTitle,
  FullDivider,
  FilterLine,
  FilterText,
  FilterSelection,
} from "./StyledFilterMobile";

export interface FilterPageProps {
  inDetails?: boolean;
}

const FilterPage: React.FC<FilterPageProps> = ({ inDetails }) => {
  return (
    <FilterMobileContainer>
      {inDetails ? (
        <FilterSubText>
          <FilterBackArrow src={blueArrow} />
          SOURCES
        </FilterSubText>
      ) : (
        <FilterTitle>FILTER</FilterTitle>
      )}
      <FullDivider />
      {!inDetails && (
        <>
          <FilterLine>
            <FilterText>Search in</FilterText>
            <FilterSelection>
              <Dropdown isSearch={true} withArrow={false} />
            </FilterSelection>
          </FilterLine>
          <FullDivider />
        </>
      )}

      <FilterLine>
        <FilterText>Sources</FilterText>
        {!inDetails && <FilterSubText>All</FilterSubText>}
      </FilterLine>
      <FullDivider />

      <FilterLine>
        <FilterText>Language</FilterText>
        {!inDetails && <FilterSubText>All</FilterSubText>}
      </FilterLine>
      <FullDivider />

      <FilterLine>
        <FilterText>Dates</FilterText>
        {!inDetails && <FilterSubText>All</FilterSubText>}
      </FilterLine>
      <FullDivider />

      <FilterLine>
        <FilterText>Results per page</FilterText>
        {!inDetails && <FilterSubText>All</FilterSubText>}
      </FilterLine>
      <FullDivider />
    </FilterMobileContainer>
  );
};

export default FilterPage;
