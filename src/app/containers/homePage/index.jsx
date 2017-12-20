/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Layout, notification } from "antd";
import { getUserInfo } from "./../../actions/homePage/";
import "./index.less";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      dispatch,
      getUserInfo
    },
    dispatch
  )
});

class App extends React.Component {
  /*
  * 此生命周期可以调用接口
  * */
  componentDidMount() {
    this.props.actions.getUserInfo(); // 接口请求

    // 通知提醒框： https://ant.design/components/notification-cn/
    if (!sessionStorage.getItem("isFirstTime")) {
      sessionStorage.setItem("isFirstTime", true);
      notification.open({
        message: "欢迎您，Guest!",
        duration: 2
      });
    }
  }

  render() {
    return (
      <Layout>
        <div className="home-page">
          <a
            href="https://github.com/allan2coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://gw.alicdn.com/tfs/TB1B3OWiBTH8KJjy0FiXXcRsXXa-140-141.png"
              alt="logo"
            />
          </a>
          <h1>Yo man, what's up~</h1>
          <span>This data is from store: </span>
        </div>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
