import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { hashHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../app/reducers/";

const logger = createLogger();
const router = routerMiddleware(hashHistory);

const enhancer = compose(
  applyMiddleware(thunk, logger, router),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  window.store = store;

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../app/reducers/", () => {
      const nextReducer = require("../app/reducers/").default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
