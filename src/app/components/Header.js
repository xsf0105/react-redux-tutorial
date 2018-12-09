import React from "react";
import { Layout, Menu, Dropdown, Icon } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  let selectMenu = window.location.hash.split("/")[1]
    ? window.location.hash.split("/")[1]
    : "homePage";

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="exit">exit</Menu.Item>
    </Menu>
  );

  const handleMenuClick = e => {
    if (e.key === "exit") {
      sessionStorage.removeItem("access_token");
      window.location.hash = "login";
    }
  };

  return (
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
          <Dropdown overlay={menu} onClick={handleMenuClick}>
            <a className="ant-dropdown-link">
              Guest<Icon type="down" />
            </a>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
