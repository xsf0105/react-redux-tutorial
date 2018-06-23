/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./app/containers/index";
import HomePage from "./app/containers/homePage/index.tsx";
import SubPage from "./app/containers/subPage/index";
import Login from "./app/containers/login/index";
import NotFoundPage from "./app/components/NotFoundPage/index";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/subPage" component={SubPage} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
