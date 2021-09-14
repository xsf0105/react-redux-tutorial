import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import fetchHome from "../../app/actions/home";
import "./index.scss";

const App = (props) => {
  const {store = {}, fetchHome} = props;

  useEffect(() => {
    fetchHome();
  }, []);

  return (
    <div className="main-container">
        <h1>Page 1</h1>
        <p className="mp3Name">
          {store.name} is from Redux's store!
        </p>
        <video controls="controls" src={store.url}></video>
    </div>
  );
}

const mapStateToProps = (store) => ({
  store: store.HomeState.result
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchHome
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
