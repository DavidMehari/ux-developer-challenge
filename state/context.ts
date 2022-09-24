import { createContext } from 'react';
import { ModalAction, ModalState } from '../types/types';
import { initialState } from './reducer';

export const ModalContext = createContext<{
  state: ModalState;
  dispatch: React.Dispatch<ModalAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
