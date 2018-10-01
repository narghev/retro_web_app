import userReducer from './user';
import usersReducer from './users';
import loadingReducer from './loading';
import newActionItemReducer from './new_action_item';
import { firebaseReducer } from 'react-redux-firebase';
import actionItemModalReducer from './action_item_modal';

export default {
  user: userReducer,
  users: usersReducer,
  loading: loadingReducer,
  firebase: firebaseReducer,
  newActionItem: newActionItemReducer,
  actionItemModalState: actionItemModalReducer
};