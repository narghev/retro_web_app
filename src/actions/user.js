import {setUser, setUsers} from './types';
import {signIn, signOut} from 'helpers/auth';
import {saveUser, getUsers} from 'helpers/user';


export const setUserAction = user => ({
    type: setUser,
    payload: user
});

export const setUsersAction = users => ({
  type: setUsers,
  payload: users
})

export const loginAction = () => async dispatch => {
  const user = await signIn();
  user && saveUser(user);
  dispatch(setUserAction(user));
};

export const logoutAction = () => async dispatch => {
  await signOut();
  dispatch(setUserAction(null))
};

export const getUsersAction = () => async dispatch => {
  const users = await getUsers();
  dispatch(setUsersAction(users));
}