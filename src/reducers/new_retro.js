import {
  setNewRetroDate,
  setNewRetroTime,
  setNewRetroOwner,
  clearNewRetroData
} from 'actions/types';

const defaultState = {
  date: '',
  time: '',
  ownerUid: ''
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case setNewRetroDate:
      return {...state, date: action.payload};
    case setNewRetroTime:
      return {...state, time: action.payload};
    case clearNewRetroData:
      return {...defaultState};
    case setNewRetroOwner:
      return {...state, ownerUid: action.payload};
    default:
      return state;
  }
};