import {setUser} from 'actions/types';

const defaultState = null;

export default (state = defaultState, action) => {
  switch(action.type) {
    case setUser:
      return action.payload
    default:
      return state
  }
};