/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Layout } from "antd";
import { Props, State } from "./type";
import styles from "./index.style";

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        msg: "This is a Ts demoooo!",
        num: 1,
        a: 11 // it will be wrong if it not be defined in typs.ts
    };
  }

  render() {
    if (!this.props.someMessage.result) {
      return null;
    }
    // console.log(this.props.someMessage.result);
    return (
      <Layout>
        <div className={styles.homePage}>
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
          <h1>{this.state.msg}</h1>
          <p className={styles.mp3Name}>
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

const mapStateToProps = (state:any) => ({
  someMessage: state.entry
});

const mapDispatchToProps = (dispatch:any) => ({ 
  actions: bindActionCreators(
    {
      dispatch
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
