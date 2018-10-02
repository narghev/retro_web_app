import {
  setNewRetroDate,
  setNewRetroTime,
  clearNewRetroData
} from 'actions/types';

const defaultState = {
  date: '',
  time: ''
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case setNewRetroDate:
      return {...state, date: action.payload};
    case setNewRetroTime:
      return {...state, time: action.payload};
    case clearNewRetroData:
      return {...defaultState};
    default:
      return state;
  }
};