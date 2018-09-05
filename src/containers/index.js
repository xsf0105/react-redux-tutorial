/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { Layout } from "antd";
import Login from "../pages/login/index";
import Header from './header';
import Footer from './footer';
import "./index.less";

const { Content } = Layout;

const App = (props) => {
  const isAuthenticated = sessionStorage.getItem("access_token");
  return (
    <div>
      {isAuthenticated ? <Header /> : null}
      <Content className="main-layout-content">
        {props.children}
      </Content>
      {isAuthenticated ? <Footer /> : null}
    </div>
  );
}

export default App;
