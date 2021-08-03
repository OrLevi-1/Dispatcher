import React from "react";
import { blueArrow } from "../../assets";
import {
  FilterBackArrow,
  FullDivider,
  FilterLine,
  FilterText,
  FilterTitle,
} from "./StyledFilterMobile";
import categories from "../../data/categories.json";

export interface SubFilterPageProps {
  title?: string;
  onBackClick: (click: boolean) => void;
}

const SubFilterPage: React.FC<SubFilterPageProps> = ({
  title,
  onBackClick,
}) => {
  return (
    <>
      <FilterTitle>
        <FilterBackArrow src={blueArrow} onClick={() => onBackClick(false)} />
        {title}
      </FilterTitle>
      <FullDivider />
      {title === "Dates" && (
        <>
          {categories.dates.map((item, index) => (
            <div key={index}>
              <FilterLine>
                <FilterText>{item.name}</FilterText>
              </FilterLine>
              <FullDivider />
            </div>
          ))}
        </>
      )}
      {title === "Country" && (
        <>
          {categories.countries.map((item, index) => (
            <div key={index}>
              <FilterLine>
                <FilterText>{item.name}</FilterText>
              </FilterLine>
              <FullDivider />
            </div>
          ))}
        </>
      )}
      {title === "Languages" && (
        <>
          {categories.languages.map((item, index) => (
            <div key={index}>
              <FilterLine>
                <FilterText>{item.name}</FilterText>
              </FilterLine>
              <FullDivider />
            </div>
          ))}
        </>
      )}
      {title === "Results per page" && (
        <>
          {categories.results_per_page.map((item, index) => (
            <div key={index}>
              <FilterLine>
                <FilterText>{item.name}</FilterText>
              </FilterLine>
              <FullDivider />
            </div>
          ))}
        </>
      )}
      {title === "Sources" && (
        <>
          {categories.sources.map((item, index) => (
            <div key={index}>
              <FilterLine>
                <FilterText>{item.name}</FilterText>
              </FilterLine>
              <FullDivider />
            </div>
          ))}
        </>
      )}
      {title === "Category" && (
        <>
          {categories.sub_categories.map((item, index) => (
            <div key={index}>
              <FilterLine>
                <FilterText>{item.name}</FilterText>
              </FilterLine>
              <FullDivider />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SubFilterPage;
