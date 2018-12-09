import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { HashRouter } from "react-router-dom";
import init from "./init";
import App from "./app/App"

const store = configureStore();

init(() => {
  ReactDOM.render(
      <HashRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </HashRouter>,
      document.getElementById("root")
  );
});
  
