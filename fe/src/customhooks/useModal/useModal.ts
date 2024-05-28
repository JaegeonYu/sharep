import { modalDataState } from '@/stores/atoms/modal';
import { useRecoilState } from 'recoil';

export const useModal = <Contents extends { [key: string]: any }>(modalId: string) => {
  const [modalData, setModalData] = useRecoilState(modalDataState(modalId));

  const openModal = (initialContents: Partial<Contents> = {}) => {
    setModalData({
      isOpen: true,
      contents: { ...initialContents },
      isValid: false,
    });
  };

  const closeModal = () => {
    setModalData(oldModalData => ({
      ...oldModalData,
      isOpen: false,
      isValid: false,
    }));
  };

  const updateContentByKey = <K extends keyof Contents>(key: K, value: Contents[K]) => {
    setModalData(oldModalData => ({
      ...oldModalData,
      contents: { ...oldModalData.contents, [key]: value },
    }));
  };

  const updateIsValid = (value: boolean) => {
    setModalData(oldModalData => ({
      ...oldModalData,
      isValid: value,
    }));
  };

  return {
    openModal,
    closeModal,
    updateContentByKey,
    updateIsValid,
  };
};
