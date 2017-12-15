/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { Link } from "react-router";
import { Layout, Menu } from "antd";
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

  renderMainPage() {
    let selectMenu = window.location.hash.split("/")[1]
      ? window.location.hash.split("/")[1]
      : "homePage";
    return (
      <div>
        <Header className="header">
          {/* <span className="logo">11</span> */}
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
    console.log(isAuthenticated, 3);
    return <div>{isAuthenticated ? this.renderMainPage() : <Login />}</div>;
  }
}

export default App;
