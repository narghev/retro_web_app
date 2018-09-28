import {setUser} from './types';
import {signIn, signOut} from 'helpers/auth';

export const setUserAction = user => ({
    type: setUser,
    payload: user
});

export const loginAction = () => async dispatch => {
  const user = await signIn();
  dispatch(setUserAction(user));
};

export const logoutAction = () => async dispatch => {
  await signOut();
  dispatch(setUserAction(null))
};