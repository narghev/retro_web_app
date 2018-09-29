import userReducer from './user';
import usersReducer from './users';
import loadingReducer from './loading';
import actionItemReducer from './action_item';

export default {
  user: userReducer,
  users: usersReducer,
  loading: loadingReducer,
  actionItemModalState: actionItemReducer
};