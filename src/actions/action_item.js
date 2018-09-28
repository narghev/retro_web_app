import {openModal, closeModal} from './types';

export const openModalAction = () => ({
  type: openModal
});

export const closeModalAction = () => ({
  type: closeModal
});