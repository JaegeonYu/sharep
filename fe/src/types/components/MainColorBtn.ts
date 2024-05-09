import React from 'react';
export interface MainColorBtnProps {
  children: React.ReactNode;
  bgc: boolean;
  disabled: boolean;
  onClick?: (...args: any[]) => void;
}
