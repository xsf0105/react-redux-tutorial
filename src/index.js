import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import DevTools from './redux/middleware/devtools';
import Routes from "./routes";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Routes />
      {process.env.NODE_ENV !== 'production' ? <DevTools /> : null}
    </div>
  </Provider>,
  document.getElementById("root")
);
