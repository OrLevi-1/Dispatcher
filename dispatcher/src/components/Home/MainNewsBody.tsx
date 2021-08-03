import React, { useState } from "react";
import {
  TopBody,
  MainDropDowns,
  WideDivider,
  MainBody,
  NewsBody,
  GraphsBody,
} from "./StyledHome";
import Dropdown from "../Dropdown/Dropdown";
import FilterMobile from "../FilterMobile/FilterMobile";
import Graph from "../Graph/Graph";
import NewsCard from "../NewsCard/NewsCard";
import LineChart from "../LineChart/LineChart";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import DropdownCategories from "../../data/categories.json";

export interface MainNewsBodyProps {
  isSearch?: boolean;
  filterClicked?: (click: boolean) => void;
}

const MainNewsBody: React.FC<MainNewsBodyProps> = ({ filterClicked }) => {
  const [filterClick, setFilterClick] = useState(false);

  const dropdowns = useSelector((state: RootState) => state.filter);

  const filterClickHandler = (isClicked: boolean) => {
    setFilterClick(isClicked);
  };

  return (
    <>
      <TopBody>
        <MainDropDowns>
          {dropdowns.mainFilter === "Everything"
            ? DropdownCategories.everything_categories.map((cat) => (
                <Dropdown
                  isSearch={false}
                  withArrow={true}
                  key={cat.id}
                  mainTitle={cat.name}
                />
              ))
            : DropdownCategories.top_categories.map((cat) => (
                <Dropdown
                  isSearch={false}
                  withArrow={true}
                  key={cat.id}
                  mainTitle={cat.name}
                />
              ))}
        </MainDropDowns>
        <WideDivider />
      </TopBody>
      <FilterMobile onFilterClick={filterClickHandler} />

      <MainBody>
        <NewsBody>
          <NewsCard />
        </NewsBody>
        <GraphsBody>
          <Graph />
          <LineChart />
        </GraphsBody>
      </MainBody>
    </>
  );
};

export default MainNewsBody;
