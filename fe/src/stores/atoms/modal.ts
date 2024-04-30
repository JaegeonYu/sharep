import { atom } from 'recoil';

// TODO: ModalState type 분리?
interface ModalState {
  [key: string]: boolean;
}

export const modalState = atom<ModalState>({
  key: 'modalState',
  default: {},
});
