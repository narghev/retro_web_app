import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import reducers from 'reducers';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

export default createStore(
  combineReducers(reducers),
  applyMiddleware(logger),
  applyMiddleware(reduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);