import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import FilterPage from "./components/FilterMobile/FilterPage";
import MobileSearch from "./components/MobileSearch/MobileSearch";
import RegisterPage from "./components/Auth/Register-page/RegisterPage";
import LoginPage from "./components/Auth/Login-page/LoginPage";
import Home from "./components/Home/Home";
import NoData from "./components/NoData/NoData";

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
            <Home />
          </Route>

          <Route path="/nodata">
            <NoData />
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
