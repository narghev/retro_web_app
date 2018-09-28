import {setLoading} from 'actions/types';

const defaultState = false;

export default (state = defaultState, action) => {
  switch(action.type) {
    case setLoading:
      return action.payload
    default:
      return state
  }
};