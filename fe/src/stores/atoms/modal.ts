import { atomFamily } from 'recoil';

export const modalDataState = atomFamily<
  { isOpen: boolean; contents: { [key: string]: any }; isValid: boolean },
  string
>({
  key: 'modalDataState',
  default: () => ({
    isOpen: false,
    contents: {},
    isValid: false,
  }),
});
