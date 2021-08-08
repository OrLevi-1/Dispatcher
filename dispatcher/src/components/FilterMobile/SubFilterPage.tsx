import React from "react";
import { blueArrow } from "../../assets";
import {
  FilterBackArrow,
  FullDivider,
  FilterTitle,
  FilterLine,
  FilterText,
} from "./StyledFilterMobile";
import categories from "../../data/categories.json";
import FilterSwitch from "./FilterSwitch";

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
      <FilterSwitch param={title!} closeClick={() => onBackClick(false)} />
    </>
  );
};

export default SubFilterPage;
