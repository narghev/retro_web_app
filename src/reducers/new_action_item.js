import {
  setNewActionItemOwner,
  clearNewActionItemData,
  setNewActionItemAssignees,
  setNewActionItemDescription,
  setNewActionItemRetro
} from 'actions/types';

const defaultState = {
  description: '',
  assignees: [],
  ownerUid: '',
  retro: null
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case setNewActionItemAssignees:
      return {...state, assignees: action.payload};
    case setNewActionItemDescription:
      return {...state, description: action.payload};
    case setNewActionItemOwner:
      return {...state, ownerUid: action.payload};
    case setNewActionItemRetro:
      return {...state, retro: action.payload};
    case clearNewActionItemData:
      return {...defaultState};
    default:
      return state;
  }
};