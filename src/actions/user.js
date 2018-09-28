import {setUser} from './types';
import {signIn} from 'helpers/auth';

export const setUserAction = user => ({
    type: setUser,
    payload: user
});

export const loginAction = () => async dispatch => {
  const user = await signIn();
  dispatch(setUserAction(user));
};