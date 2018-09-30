import {
  setNewActionItemDate,
  setNewActionItemTime,
  setNewActionItemOwner,
  clearNewActionItemData,
  setNewActionItemAssignees,
  setNewActionItemDescription
} from 'actions/types';

import {setLoadingStatus} from 'actions/loading';
import {saveActionItem} from 'helpers/action_item';

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

export const setOwner = owner => ({
  type: setNewActionItemOwner,
  payload: owner
});

export const clearData = () => ({
  type: clearNewActionItemData
});

export const createActionItemAction = data => async dispatch => {
  dispatch(setLoadingStatus(true));
  await saveActionItem(data);
  dispatch(clearData());
  dispatch(setLoadingStatus(false));

  return {};
};