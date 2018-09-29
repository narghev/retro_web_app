import userReducer from './user';
import usersReducer from './users';
import loadingReducer from './loading';

export default {
  user: userReducer,
  users: usersReducer,
  loading: loadingReducer
};