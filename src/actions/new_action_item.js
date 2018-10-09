import {
  setNewActionItemRetro,
  setNewActionItemOwner,
  clearNewActionItemData,
  setNewActionItemAssignees,
  setNewActionItemDescription,
  setNewActionItemIsDone
} from 'actions/types';

export const setDescription = descr => ({
  type: setNewActionItemDescription,
  payload: descr
});

export const setAssignees = assignees => ({
  type: setNewActionItemAssignees,
  payload: assignees
});

export const setOwner = owner => ({
  type: setNewActionItemOwner,
  payload: owner
});

export const clearData = () => ({
  type: clearNewActionItemData
});

export const setRetro = retro => ({
  type: setNewActionItemRetro,
  payload: retro
});

export const setIsDone = () => ({
  type: setNewActionItemIsDone,
  payload: true
});