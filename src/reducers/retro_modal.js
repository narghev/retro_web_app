import {openRetroModal, closeRetroModal} from 'actions/types';

const defaultState = false;

export default (state = defaultState, action) => {
  switch(action.type) {
    case openRetroModal:
      return true;
    case closeRetroModal:
      return false;
    default:
      return state;
  }
};