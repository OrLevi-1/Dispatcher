import React, { useState } from "react";
import { useSelector } from "react-redux";
import { blueArrow } from "../../assets";
import { RootState } from "../../store/store";
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
import SubFilterPage from "./SubFilterPage";
import categories from "../../data/categories.json";

export interface FilterPageProps {
  inDetails?: boolean;
}

const FilterPage: React.FC<FilterPageProps> = ({ inDetails }) => {
  const filter = useSelector((state: RootState) => state.filter);
  const filterArray = useSelector(
    (state: RootState) => state.filter.filterArray
  );

  const [lineClick, setLineClick] = useState("");
  const [backClick, setBackClick] = useState(false);

  const backClickHandler = (isClick: boolean) => {
    setBackClick(isClick);
  };

  return (
    <FilterMobileContainer>
      {!backClick ? (
        <>
          <FilterTitle>FILTER</FilterTitle>
          <FullDivider />
          <FilterLine>
            <FilterText>Search in</FilterText>
            <FilterSelection>
              <Dropdown isSearch={true} withArrow={false} />
            </FilterSelection>
          </FilterLine>
          <FullDivider />
          {filter.mainFilter === "Everything"
            ? categories.everything_categories.slice(1).map((title, index) => {
                return (
                  <div key={index}>
                    <FilterLine
                      onClick={() => {
                        setLineClick(title.name);
                        setBackClick(true);
                      }}
                    >
                      <FilterText>{title.name}</FilterText>
                      <FilterSubText>
                        {/* {filterArray[filterArray.length - 1].id.toUpperCase()} */}
                        All
                      </FilterSubText>
                    </FilterLine>
                    <FullDivider />
                  </div>
                );
              })
            : categories.top_categories.map((title, index) => {
                return (
                  <div key={index}>
                    <FilterLine
                      onClick={() => {
                        setLineClick(title.name);
                        setBackClick(true);
                      }}
                    >
                      <FilterText>{title.name}</FilterText>
                      <FilterSubText>
                        {/* {filterArray[
                          filterArray.length - 1
                        ].id.toUpperCase() === "" ? (
                          <>All</>
                        ) : (
                          filterArray[filterArray.length - 1].id.toUpperCase()
                        )} */}
                        All
                      </FilterSubText>
                    </FilterLine>
                    <FullDivider />
                  </div>
                );
              })}
        </>
      ) : (
        <SubFilterPage title={lineClick} onBackClick={backClickHandler} />
      )}
    </FilterMobileContainer>
  );
};

export default FilterPage;
