import React from "react";
import { LoginPage } from "./components/Auth/Login-page/LoginPage.stories";
import { RegisterPage } from "./components/Auth/Register-page/RegisterPage.stories";
import Header from "./components/Header/Header";
import {
  MainBody,
  TopBody,
  WideDivider,
  MainDropDowns,
  NewsBody,
  GraphsBody,
} from "./styles/StyledComps";
import Dropdown from "./components/Dropdown/Dropdown";
import LineChart from "./components/LineChart/LineChart";

import NewsCard from "./components/NewsCard/NewsCard";
import FilterMobile from "./components/FilterMobile/FilterMobile";
import Graph from "./components/Graph/Graph";

function App() {
  return (
    <>
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
      <Header />
      <TopBody>
        <MainDropDowns>
          <Dropdown isSearch={false} />
          <Dropdown isSearch={false} />
          <Dropdown isSearch={false} />
          <Dropdown isSearch={false} />
        </MainDropDowns>
        <WideDivider />
      </TopBody>
      <FilterMobile />
      <MainBody>
        <NewsBody>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </NewsBody>
        <GraphsBody>
          <Graph />
          <LineChart />
        </GraphsBody>
      </MainBody>
    </>
  );
}

export default App;
