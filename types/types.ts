import { Key } from 'react';

export type ContactItem = {
  id?: Key;
  name: string;
  avatar: string;
  phone?: string;
  email?: string;
};

export type ModalState = {
  modalOpen: boolean;
  mode: string;
  contactIdToEdit: string;
};

export type ModalAction = {
  type: string;
  payload?: string;
};
