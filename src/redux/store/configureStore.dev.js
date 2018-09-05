import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { hashHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../modules";
import DevTools from '../middleware/devtools'

const logger = createLogger();
const router = routerMiddleware(hashHistory);

const enhancer = compose(
  // 三个中间件，Redux 的原生方法，作用是将所有中间件组成一个数组，依次执行。
  applyMiddleware(thunk, logger, router),
  // window.devToolsExtension ? window.devToolsExtension() : f => f
  DevTools.instrument(),
);

/**
 * 创建storeßß
 */
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  window.store = store;

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../modules/", () => {
      const nextReducer = require("../modules/").default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
