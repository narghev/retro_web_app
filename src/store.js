import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import reducers from 'reducers';
import {createLogger} from 'redux-logger';
import reduxThunk from 'redux-thunk';

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error
});

export default createStore(
  combineReducers(reducers),
  applyMiddleware(logger),
  applyMiddleware(reduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);