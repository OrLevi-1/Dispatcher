import React from "react";
import { LoginPage } from "./components/Auth/Login-page/LoginPage.stories";
import { RegisterPage } from "./components/Auth/Register-page/RegisterPage.stories";
import Header from "./components/Header/Header";
import {
  General,
  MainBody,
  WideDivider,
  MainDropDowns,
} from "./styles/StyledComps";
import Dropdown from "./components/Dropdown/Dropdown";

import NewsCard from "./components/NewsCard/NewsCard";
import FilterMobile from "./components/FilterMobile/FilterMobile";

function App() {
  return (
    <>
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
      <General>
        <Header />
        <MainDropDowns>
          <Dropdown isSearch={false} />
          <Dropdown isSearch={false} />
          <Dropdown isSearch={false} />
          <Dropdown isSearch={false} />
        </MainDropDowns>
        <FilterMobile />
        <MainBody>
          <WideDivider />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </MainBody>
      </General>
    </>
  );
}

export default App;
