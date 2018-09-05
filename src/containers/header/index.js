/**
 * @author xuyi 2018-09-05
 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Dropdown, Icon } from "antd";
import { routerConfig } from '../../routes';
import './index.less';

const { SubMenu } = Menu;

class Header extends Component {
    state = {}
    
    handleMenuClick = e => {
        if (e.key === "exit") {
            this.exit();
        }
    }

    // 退出到登录页面
    exit = () => {
        const { history: { replace } } = this.props;
        // console.log('.....')
        sessionStorage.removeItem("access_token");
        // window.location.href = '/login';
        replace && replace('/login');
    }

    // 菜单选项
    renderMenu = () => {
        const routerArr = [];
        const len = routerConfig.length;
        for (let i = 0; i < len; i ++) {
            const { name, path, children } = routerConfig[i];
            if (children) {
                const clen = children.lenght;
                const crouter = [];
                for (let j = 0; j < clen; j ++) {
                    const { name: cname, path: cpath, component: ccomponent } = children[j];
                    crouter.push(<Menu.Item key={cpath}><Link to={cpath}>{cname}</Link></Menu.Item>);
                }
                routerArr.push(<SubMenu key={path} title={name} >{crouter}</SubMenu>);
            } else {
                routerArr.push(<Menu.Item key={path}><Link to={path}>{name}</Link></Menu.Item>);
            }
        }
        return routerArr;
    }

    render() {
        const { location: { pathname = "" } = {} } = this.props;
        let selectMenu = window.location.hash.split("/")[1]
        ? window.location.hash.split("/")[1]
        : "homePage";

        const menu = (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="exit">exit</Menu.Item>
        </Menu>
        );
        return (
            <Layout.Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["/homePage"]}
                    style={{ lineHeight: "64px" }}
                    selectedKeys={[pathname]}
                >
                    {this.renderMenu()}
                    <Menu.Item key="user" style={{ float: "right" }}>
                    <Dropdown overlay={menu} onClick={this.handleMenuClick}>
                        <a className="ant-dropdown-link">
                        Guest<Icon type="down" />
                        </a>
                    </Dropdown>
                    </Menu.Item>
                </Menu>
            </Layout.Header>
        );
    }
}

export default withRouter(Header);
