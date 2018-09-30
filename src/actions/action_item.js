import {openModal, closeModal} from './types';
import {setLoadingStatus} from 'actions/loading';
import {saveActionItem} from 'helpers/action_item';
import {clearData} from './new_action_item';

export const openModalAction = () => ({
  type: openModal
});

export const closeModalAction = () => ({
  type: closeModal
});

export const createActionItemAction = data => async dispatch => {
  dispatch(setLoadingStatus(true));
  await saveActionItem(data);
  dispatch(clearData());
  dispatch(setLoadingStatus(false));

  return {};
};