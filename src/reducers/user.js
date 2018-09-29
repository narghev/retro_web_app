import {setUser, setUsers} from 'actions/types';

const defaultUserState = null;

export const userReducer = (state = defaultUserState, action) => {
  switch(action.type) {
    case setUser:
      return action.payload
    default:
      return state
  }
};

const defaultUsersState = {};

export const usersReducer = (state = defaultUsersState, action) => {
  switch (action.type) {
    case setUsers:
      return action.payload
    default:
      return state
  }
}