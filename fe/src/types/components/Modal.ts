import React from 'react';

export interface ModalProps {
  modalId: string;
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

export interface ProjectCreationFormProps {
  modalId: string;
}

export interface TaskCreationFormProps {
  modalId: string;
}
