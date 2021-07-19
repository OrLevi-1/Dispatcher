import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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
  MainNoData,
} from "./styles/StyledComps";
import Dropdown from "./components/Dropdown/Dropdown";
import LineChart from "./components/LineChart/LineChart";

import NewsCard from "./components/NewsCard/NewsCard";
import FilterMobile from "./components/FilterMobile/FilterMobile";
import Graph from "./components/Graph/Graph";
import FilterPage from "./components/FilterMobile/FilterPage";
import MobileSearch from "./components/MobileSearch/MobileSearch";
import { notFoundImg } from "./assets";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/register">
            <RegisterPage />
          </Route>

          <Route path="/home">
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
          </Route>

          <Route path="/nodata">
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
                <MainNoData>
                  <img src={notFoundImg} />
                  <a>We couldn't find any matches for your query</a>
                </MainNoData>
              </NewsBody>
              <GraphsBody>
                <Graph isData={false} />
                <LineChart isData={false} />
              </GraphsBody>
            </MainBody>
          </Route>

          <Route path="/search">
            <MobileSearch />
          </Route>

          <Route path="/filter">
            <FilterPage inDetails={false} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
