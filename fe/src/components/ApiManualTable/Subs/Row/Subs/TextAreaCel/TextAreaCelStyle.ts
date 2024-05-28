import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const TextAreaCel = styled.textarea<{ $fixedWidth: string; $isEditingMode: boolean }>`
  max-width: 100%;
  width: ${({ $fixedWidth }) => $fixedWidth};
  min-height: 100%;
  min-width: ${({ $fixedWidth }) => $fixedWidth};
  border-radius: ${({ $isEditingMode }) => $isEditingMode && '6px'};
  box-shadow: ${({ $isEditingMode }) => $isEditingMode && '2px 2px 16px rgba(0, 0, 0, 0.36)'};
  color: ${PALETTE.TABLE_CONTENT};
  resize: none;
  outline: none;
  overflow: hidden;
  text-align: left;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  position: relative;

  &:focus {
    border: none;
    cursor: text;
  }

  &:read-only {
    background-color: ${PALETTE.MAIN_BACKGROUND};
    cursor: default;
  }
`;
