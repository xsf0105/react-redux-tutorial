/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { Switch, Route, Redirect, BrowserRouter as Router, withRouter } from 'react-router-dom';

import App from "./containers/index";
import HomePage from "./pages/homePage";
import SubPage from "./pages/subPage/index";
import Login from "./pages/login/index";
import NotFoundPage from "./components/NotFoundPage/index";

export const routerConfig = [{
  name: 'hompage', path: '/homePage', component: HomePage,
},{
  name: 'subPage', path: '/subPage', component: SubPage,
}];

const checkLogin = ({ history, location }) => {
  const { replace } = history;
  const { pathname } = location;
  if (!sessionStorage.getItem("access_token") && pathname !== '/login') {
    // window.location.hash = "login";
    replace && replace('/login');
  }
  return null;
}

const renderRouters = (routers) => {
  const routerArr = [];
  const len = routers.length;
  for (let i = 0; i < len; i ++) {
    const { name, path, children, component } = routers[i];
    if (children) {
      const clen = children.lenght;
      for (let j = 0; j < clen; j ++) {
        const { name: cname, path: cpath, component: ccomponent } = children[j];
        routerArr.push(<Route key={cpath} exact path={cpath} component={ccomponent} />);
      }
    } else {
      routerArr.push(<Route key={path} exact path={path} component={component} />);
    }
  }
  return routerArr;
}

export default () => (
  <Router>
    <App>
      <Switch>
        {renderRouters(routerConfig)}
        <Route key="/login" exact path="/login" component={Login} />
        <Redirect to="/homePage" />
        <Route component={NotFoundPage} />
      </Switch>
      <Route component={withRouter(checkLogin)} />
    </App>
  </Router>
);
