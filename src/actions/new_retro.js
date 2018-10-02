import {
  setNewRetroDate,
  setNewRetroTime,
  setNewRetroOwner,
  clearNewRetroData
} from 'actions/types';

export const setDate = date => ({
  type: setNewRetroDate,
  payload: date
});

export const setTime = time => ({
  type: setNewRetroTime,
  payload: time
});

export const setRetroOwner = owner => ({
  type: setNewRetroOwner,
  payload: owner
});

export const clearData = () => ({
  type: clearNewRetroData
});