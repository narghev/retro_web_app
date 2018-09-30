import {
  setNewActionItemDate,
  setNewActionItemTime,
  clearNewActionItemData,
  setNewActionItemAssignees,
  setNewActionItemDescription
} from 'actions/types';

export const setDescription = descr => ({
  type: setNewActionItemDescription,
  payload: descr
});

export const setDate = date => ({
  type: setNewActionItemDate,
  payload: date
});

export const setTime = time => ({
  type: setNewActionItemTime,
  payload: time
});

export const setAssignees = assignees => ({
  type: setNewActionItemAssignees,
  payload: assignees
});

export const clearData = () => ({
  type: clearNewActionItemData
});