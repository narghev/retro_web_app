import userReducer from './user';
import usersReducer from './users';
import loadingReducer from './loading';
import actionItemReducer from './action_item';
import newActionItemReducer from './new_action_item';

export default {
  user: userReducer,
  users: usersReducer,
  loading: loadingReducer,
  newActionItem: newActionItemReducer,
  actionItemModalState: actionItemReducer
};