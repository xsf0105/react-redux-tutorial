/**
 * Created by JESSICA on 2017/6/21.
 */
import React from "react";
import { connect } from "react-redux";
import "./index.scss";
// import logo from './logo.svg';

export class SubPage extends React.Component {

  render() {
    const { homeData={} } = this.props;
    
    return (
      <div className="sub-page">
        <img src='https://gw.alicdn.com/tfs/TB1B3OWiBTH8KJjy0FiXXcRsXXa-140-141.png' alt="" />

        <p className="mp3-title">
          {homeData.name} is from Redux's store!
        </p>
        <audio controls="controls" src={homeData.url}>
          Your browser does not support the audio tag.
        </audio>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homeData: state.homeData
});

export default connect(mapStateToProps)(SubPage);
