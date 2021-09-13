import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import fetchHome from "../../app/actions";
import fetchHome from "./action";
import "./index.scss";

class App extends React.Component{

  componentDidMount() {
    // action
    this.props.fetchHome();
  }

  render() {
    const { store = {} } = this.props;
    return (
      <div className="main-container">
          <h1>Page 1</h1>
          <p className="mp3Name">
            {store.name} is from Redux's store!
          </p>
          {/* <audio controls src={store.url} /> */}
          <video controls="controls" src={store.url}></video>
      </div>
    );
  }
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
