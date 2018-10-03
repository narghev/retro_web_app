import {openRetroModal, closeRetroModal} from './types';
import {setLoadingStatus} from 'actions/loading';
import {saveRetro} from 'helpers/retro';
import {clearData} from './new_retro';

export const openModalAction = () => ({
  type: openRetroModal
});

export const closeModalAction = () => ({
  type: closeRetroModal
});

export const createRetroAction = data => async dispatch => {
  dispatch(setLoadingStatus(true));
  await saveRetro(data);
  dispatch(clearData());
  dispatch(setLoadingStatus(false));

  return {};
};