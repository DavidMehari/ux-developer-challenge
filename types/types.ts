import { Key } from 'react';

export type ContactItem = {
  id?: Key;
  name: string;
  phone: string;
  email: string;
  avatar: string;
};

export type ModalState = {
  modalOpen: boolean;
  mode: string;
  contactIdToEdit: string;
};

enum ModalActionKind {
  ADD_CONTACT = "ADD_CONTACT",
  EDIT_CONTACT = "EDIT_CONTACT",
  CLOSE_MODAL = "CLOSE_MODAL"
}

export type ModalAction = {
  type: string;
  payload?: string;
}