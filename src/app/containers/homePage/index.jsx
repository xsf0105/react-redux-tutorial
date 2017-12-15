/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Layout } from "antd";
import { fetchList } from "../../actions/homePage/";
import "./index.less";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      dispatch,
      fetchList
    },
    dispatch
  )
});

class App extends React.Component {
  /*
  * 进入页面请求数据
  * */
  componentDidMount() {
    // this.props.actions.fetchList()
    // .then(res => {
    //   console.log(res);
    // });
  }
  render() {
    return (
      <Layout>
        <div className="home-page">
          <a href="https://github.com/allan2coder" target="_blank">
            <img
              src="https://gw.alicdn.com/tfs/TB1B3OWiBTH8KJjy0FiXXcRsXXa-140-141.png"
              alt="logo"
            />
          </a>
          <h1>Yo man, what's up~</h1>
        </div>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
