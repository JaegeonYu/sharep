export interface ModalProps {
  modalId: string;
  title: string;
  subTitle?: string;
  modalStyle: 'basic' | 'fadeInSlideUp';
  children: React.ReactNode;
}
