import {
  setNewRetroDate,
  setNewRetroTime,
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

export const clearData = () => ({
  type: clearNewRetroData
});