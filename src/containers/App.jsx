import React, {Component} from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";

import HomePage from "./home";
import SubPage from "./subPage";
import Login from "./login";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Link to="/">Page 1</Link>
          <br/>
          <Link to="/page2">Page 2</Link>
        </header>

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
          <Route path="/page2" component={SubPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}
