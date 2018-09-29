import {userReducer, usersReducer} from './user';
import loadingReducer from './loading';

export default {
  user: userReducer,
  users: usersReducer,
  loading: loadingReducer
};