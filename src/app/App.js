import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout, Menu, Dropdown, Icon } from "antd";

import App from "./containers/index";
import HomePage from "./containers/homePage/index.tsx";
import SubPage from "./containers/subPage/index";
import Login from "./containers/login/index";

const { Header, Content, Footer } = Layout;

export default class EnrtyRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMenuClick = e => {
    if (e.key === "exit") {
      sessionStorage.removeItem("access_token");
      window.location.hash = "login";
    }
  };

  renderMainPage() {
    let selectMenu = window.location.hash.split("/")[1]
      ? window.location.hash.split("/")[1]
      : "homePage";

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="exit">exit</Menu.Item>
      </Menu>
    );

    return (
      <React.Fragment>
        {/* Header */}
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["homePage"]}
            style={{ lineHeight: "64px" }}
            selectedKeys={[selectMenu]}
          >
            <Menu.Item key="homePage">
              <Link to="/">HomePage</Link>
            </Menu.Item>
            <Menu.Item key="subPage">
              <Link to="/subPage">SubPage</Link>
            </Menu.Item>

            <Menu.Item key="user" style={{ float: "right" }}>
              <Dropdown overlay={menu} onClick={this.handleMenuClick}>
                <a className="ant-dropdown-link">
                  Guest<Icon type="down" />
                </a>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </Header>

        {/* main content */}
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              if (!sessionStorage.getItem("access_token")) {
                return <Redirect to="/login" />;
              } else {
                return <HomePage />;
              }
            }}
          />
          <Route path="/subPage" component={SubPage} />
          <Route path="/login" component={Login} />
        </Switch>
        
      </React.Fragment>
    );
  }

  render() {
    const isAuthenticated = sessionStorage.getItem("access_token");
    return (
      <React.Fragment>
        {isAuthenticated ? this.renderMainPage() : <Login />}
      </React.Fragment>
    );
  }
}
