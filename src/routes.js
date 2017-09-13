/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./app/containers/app/";
import HomePage from "./app/containers/homePage/";
import SubPage from "./app/containers/subPage/";
import NotFoundPage from "./app/components/NotFoundPage/NotFoundPage";

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="/subPage" component={SubPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
