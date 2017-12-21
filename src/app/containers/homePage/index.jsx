/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Layout, notification } from "antd";
import "./index.less";

class App extends React.Component {
  /*
  * 此生命周期可以调用接口
  * */
  componentDidMount() {
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
    if (!this.props.someMessage.result) {
      return null;
    }
    console.log(this.props.someMessage.result, 44);
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
          <p className="mp3-name">
            {this.props.someMessage.result.name} is from store /
            来自sotre可以全局共享的状态:
          </p>
          <audio controls="controls" src={this.props.someMessage.result.url}>
            Your browser does not support the audio tag.
          </audio>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  someMessage: state.entry
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      dispatch
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
