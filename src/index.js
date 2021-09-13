import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import init from "./init";
import App from "./app/App"
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import configureStore from "./store/configureStore";

import './App.css';

const store = configureStore();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

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
