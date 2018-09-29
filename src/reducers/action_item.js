import {openModal, closeModal} from 'actions/types';

const defaultState = true;

export default (state = defaultState, action) => {
  switch(action.type) {
    case openModal:
      return true;
    case closeModal:
      return false;
    default:
      return state;
  }
};