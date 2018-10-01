import {
  setNewActionItemOwner,
  clearNewActionItemData,
  setNewActionItemAssignees,
  setNewActionItemDescription
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