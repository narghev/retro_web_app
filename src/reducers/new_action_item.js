import {
  setNewActionItemDate,
  setNewActionItemTime,
  setNewActionItemOwner,
  clearNewActionItemData,
  setNewActionItemAssignees,
  setNewActionItemDescription
} from 'actions/types';

const defaultState = {
  description: '',
  assignees: [],
  date: '',
  time: '',
  ownerUid: ''
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
    case setNewActionItemOwner:
      return {...state, ownerUid: action.payload};
    case clearNewActionItemData:
      return {...defaultState};
    default:
      return state;
  }
};