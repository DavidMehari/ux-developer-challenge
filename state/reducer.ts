import { ModalAction, ModalState } from '../types/types';

export const initialState = {
  modalOpen: false,
  mode: '',
  contactIdToEdit: '',
};

export const modalReducer = (
  state: ModalState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        modalOpen: true,
        mode: 'Add',
      };
    case 'EDIT_CONTACT': {
      return {
        ...state,
        modalOpen: true,
        mode: 'Edit',
        contactIdToEdit: action.payload!,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        modalOpen: false,
        mode: '',
        contactIdToEdit: '',
      };
    }
    default:
      return state;
  }
};
