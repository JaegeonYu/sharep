import { atomFamily } from 'recoil';

export const modalDataState = atomFamily<{ isOpen: boolean; formData: { [key: string]: any } }, string>({
  key: 'modalDataState',
  default: () => ({
    isOpen: false,
    formData: {},
  }),
});
