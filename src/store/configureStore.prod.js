import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../app/reducers/';
import { browserHistory } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
// import promiseMiddleware from './../utils/promise-middleware';

const router = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
  const store = createStore(rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      // promiseMiddleware(),
      router
    )
  );
  window.store = store;
  return store;
}