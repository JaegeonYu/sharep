import { atomFamily } from 'recoil';

export const modalDataState = atomFamily<{ isOpen: boolean; contents: { [key: string]: any } }, string>({
  key: 'modalDataState',
  default: () => ({
    isOpen: false,
    contents: {},
  }),
});
