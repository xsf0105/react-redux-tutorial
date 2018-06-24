/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { Link } from "react-router";
import { Layout, Menu, Dropdown, Icon } from "antd";
import Login from "../containers/login/index";
import "./index.less";

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  componentWillMount() {
    if (!sessionStorage.getItem("access_token")) {
      window.location.hash = "login";
    } else {
      window.location.hash = "#";
    }
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
      <div>
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

        <Content className="main-layout-content">{this.props.children}</Content>

        <Footer className="footer" style={{ textAlign: "center" }}>
          React-SPA ©2017 Created by Allan
        </Footer>
      </div>
    );
  }

  render() {
    const isAuthenticated = sessionStorage.getItem("access_token");
    return <div>{isAuthenticated ? this.renderMainPage() : <Login />}</div>;
  }
}

export default App;
