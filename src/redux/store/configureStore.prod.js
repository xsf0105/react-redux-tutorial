import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

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