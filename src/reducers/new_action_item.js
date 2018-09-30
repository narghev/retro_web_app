import {
  setNewActionItemDate,
  setNewActionItemTime,
  setNewActionItemAssignees,
  setNewActionItemDescription
} from 'actions/types';

const defaultState = {
  description: '',
  assignees: [],
  date: '',
  time: ''
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case setNewActionItemAssignees:
      return {...state, assignees: action.payload};
    case setNewActionItemDate:
      return {...state, date: action.payload};
    case setNewActionItemTime:
      return {...state, time: action.payload};
    case setNewActionItemDescription:
      return {...state, description: action.payload};
    default:
      return state;
  }
};