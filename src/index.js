import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import configureStore from "./app/store/configureStore.ts";
import init from "./init";
import App from "./containers/App";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
