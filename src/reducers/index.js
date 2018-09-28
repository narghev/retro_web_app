import userReducer from './user';
import loadingReducer from './loading';
import actionItemReducer from './action_item';

export default {
  user: userReducer,
  loading: loadingReducer,
  actionItemModalState: actionItemReducer
};