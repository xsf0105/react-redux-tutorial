import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header.jsx";
import HomePage from "./home";
import SubPage from "./subPage";
import Login from "./login";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              if (!sessionStorage.getItem("access_token"))
                return <Redirect to="/login" />;
              else return <HomePage />;
            }}
          />
          <Route path="/subPage" component={SubPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}
