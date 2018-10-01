import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import reducers from 'reducers';
import reduxThunk from 'redux-thunk';
import firebase from 'config/firebase';
import { createLogger } from 'redux-logger';
import { reactReduxFirebase } from 'react-redux-firebase';

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error
});

const rrfConfig = {};

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
)(createStore)

export default createStoreWithFirebase(
  combineReducers(reducers),
  applyMiddleware(logger),
  applyMiddleware(reduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);