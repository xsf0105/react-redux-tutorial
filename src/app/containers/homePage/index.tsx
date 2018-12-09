/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Props, State } from "./type";
import styles from "./index.style"; // css modules
import { fetchList } from "./action";

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      welcomeText: "Welcome to React!",
      num: 1
    };
  }

  componentDidMount() {
    this.props.fetchList().then((res: any) => {
      console.log("接口返回数据:", res);
    });
  }

  render() {
    const { homeData = {} } = this.props;
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
          <h1>{this.state.welcomeText}</h1>
          <p className={styles.mp3Name}>
            {homeData.name} is from Redux's store!
          </p>
          <audio controls src={homeData.url} />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => ({
  homeData: state.homeData
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchList
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
