import React from "react";
import { connect } from "react-redux";
import "./index.scss";


const Page2 = (props) => {
  const {store = {}} = props;

  return (
    <div className="sub-page">
      <h1>Page 2</h1>
      <p className="mp3-title">
        {store.name} is from Redux's store!
      </p>
      <video controls="controls" src={store.url}></video>
    </div>
  );
}


const mapStateToProps = store => ({
  store: store.HomeState.result
});

export default connect(mapStateToProps)(Page2);
