import {setUsers} from 'actions/types';

const defaultState = {};

export default (state = defaultState, action) => {
  switch(action.type) {
    case setUsers:
      return action.payload
    default:
      return state
  }
};
