import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./containers/homePage";
import SubPage from "./containers/subPage";
import Login from "./containers/login";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <Header />

        {/* main content */}
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
