import {setUser} from './types';

export const setUserAction = user => (
  {
    type: setUser,
    payload: user
  }
);