import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import reducers from 'reducers';
import logger from 'redux-logger';

export default createStore(
  combineReducers(reducers),
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);