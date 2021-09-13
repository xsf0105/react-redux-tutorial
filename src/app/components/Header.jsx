import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';
import "./Header.scss";

const { Header } = Layout;

const HeaderComponent = () => {
  let selectMenu = window.location.hash.split("/")[1]
    ? window.location.hash.split("/")[1]
    : "homePage";

    const handleMenuClick = e => {
      if (e.key === "exit") {
        sessionStorage.removeItem("access_token");
        window.location.hash = "login";
      }
    };
    
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="exit">exit</Menu.Item>
    </Menu>
  );


  return (
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

        <Menu.Item key="user" className="exit">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.handleMenuClick()}>
              guest <DownOutlined />
            </a>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
