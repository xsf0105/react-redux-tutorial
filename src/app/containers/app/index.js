/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { Link } from "react-router";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  render() {
    let selectMenu = window.location.hash.split("/")[1]
      ? window.location.hash.split("/")[1]
      : "homePage";
    return (
      <div>
        <Header className="header">
          <div className="logo" />
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

        <Footer style={{ textAlign: "center" }}>
          Hello React ©2017 Created by Allan
        </Footer>
      </div>
    );
  }
}

export default App;
