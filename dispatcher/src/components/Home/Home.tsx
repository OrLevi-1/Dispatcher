import React, { useState } from "react";
import {
  TopBody,
  MainDropDowns,
  WideDivider,
  MainBody,
  NewsBody,
  GraphsBody,
  SearchTransition,
  SearchFilterMask,
  FilterTransition,
} from "./StyledHome";
import Dropdown from "../Dropdown/Dropdown";
import FilterMobile from "../FilterMobile/FilterMobile";
import Graph from "../Graph/Graph";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";
import LineChart from "../LineChart/LineChart";
import FilterPage from "../FilterMobile/FilterPage";
import MobileSearch from "../MobileSearch/MobileSearch";

export interface HomeProps {
  isSearch?: boolean;
  isFilter?: boolean;
}

const Home: React.FC<HomeProps> = ({}) => {
  const [searchClick, setSearchClick] = useState(false);
  const [filterClick, setFilterClick] = useState(false);
  const [filterDeepClick, setFilterDeep] = useState(false);

  const searchClickHandler = (isClicked: boolean) => {
    setSearchClick(isClicked);
  };
  const filterClickHandler = (isClicked: boolean) => {
    setFilterClick(isClicked);
  };
  const filterDeepClickHandler = (isClicked: boolean) => {
    setFilterDeep(isClicked);
  };

  return (
    <>
      <SearchTransition isSearch={searchClick}>
        <MobileSearch />
        <SearchFilterMask
          onClick={() => {
            setSearchClick(false);
          }}
        />
      </SearchTransition>

      <FilterTransition isFilter={filterClick}>
        <FilterPage />
        <SearchFilterMask
          onClick={() => {
            setFilterClick(false);
          }}
        />
      </FilterTransition>

      <Header onSearchClick={searchClickHandler} />
      <TopBody>
        <MainDropDowns>
          <Dropdown isSearch={false} withArrow={true} />
          <Dropdown isSearch={false} withArrow={true} />
          <Dropdown isSearch={false} withArrow={true} />
          <Dropdown isSearch={false} withArrow={true} />
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

export default Home;
