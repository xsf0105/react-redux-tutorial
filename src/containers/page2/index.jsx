import React from "react";
import { connect } from "react-redux";
import "./index.scss";

export class Page2 extends React.Component {

  render() {
    const { store } = this.props;
    
    return (
      <div className="sub-page">
        {/* <img src='https://gw.alicdn.com/tfs/TB1B3OWiBTH8KJjy0FiXXcRsXXa-140-141.png' alt="" /> */}

        <h1>Page 2</h1>

        <p className="mp3-title">
          {store.name} is from Redux's store!
        </p>
        
        <video controls="controls" src={store.url}></video>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store: store.HomeState.result
});

export default connect(mapStateToProps)(Page2);
