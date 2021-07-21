import React, { useState } from "react";
import {
  TopBody,
  MainDropDowns,
  WideDivider,
  MainBody,
  NewsBody,
  GraphsBody,
} from "../../styles/StyledComps";
import Dropdown from "../Dropdown/Dropdown";
import FilterMobile from "../FilterMobile/FilterMobile";
import Graph from "../Graph/Graph";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";
import LineChart from "../LineChart/LineChart";
import MobileSearch from "../MobileSearch/MobileSearch";

export interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Header />
      <TopBody>
        <MainDropDowns>
          <Dropdown isSearch={false} withArrow={true} />
          <Dropdown isSearch={false} withArrow={true} />
          <Dropdown isSearch={false} withArrow={true} />
          <Dropdown isSearch={false} withArrow={true} />
        </MainDropDowns>
        <WideDivider />
      </TopBody>
      <FilterMobile />
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
