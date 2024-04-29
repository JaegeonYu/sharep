import { modalState } from '@/stores/atoms/modal';
import { useSetRecoilState } from 'recoil';

export const useModal = () => {
  const setModalState = useSetRecoilState(modalState);

  const openModal = (modalId: string) => {
    setModalState(oldModalState => ({
      ...oldModalState,
      [modalId]: true,
    }));
  };

  const closeModal = (modalId: string) => {
    setModalState(oldModalState => ({
      ...oldModalState,
      [modalId]: false,
    }));
  };

  return { openModal, closeModal };
};
