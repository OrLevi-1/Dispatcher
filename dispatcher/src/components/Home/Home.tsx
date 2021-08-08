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
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import DropdownCategories from "../../data/categories.json";
import { Divider } from "../Auth/Form/StyledForm";
import { FullDivider } from "../FilterMobile/StyledFilterMobile";

export interface HomeProps {
  isSearch?: boolean;
  isFilter?: boolean;
}

const Home: React.FC<HomeProps> = ({}) => {
  const [searchClick, setSearchClick] = useState(false);
  const [filterClick, setFilterClick] = useState(false);
  const [filterDeepClick, setFilterDeep] = useState(false);

  const dropdowns = useSelector((state: RootState) => state.filter);

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
        <MobileSearch onBackClick={searchClickHandler} />
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
          <Dropdown
            isSearch={false}
            withArrow={false}
            mainTitle={"Previous Page"}
          />
          <Dropdown
            isSearch={false}
            withArrow={false}
            mainTitle={"Next Page"}
          />
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
          {/* <LineChart /> */}
        </GraphsBody>
      </MainBody>
    </>
  );
};

export default Home;
