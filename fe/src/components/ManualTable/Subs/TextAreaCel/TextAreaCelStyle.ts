import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const TextAreaCel = styled.textarea<{ $fixedWidth: string; $isEditingMode: boolean }>`
  max-width: 100%;
  width: ${({ $fixedWidth }) => $fixedWidth};
  min-width: fit-content;
  min-height: fit-content;
  border-radius: ${({ $isEditingMode }) => $isEditingMode && '6px'};
  box-shadow: ${({ $isEditingMode }) => $isEditingMode && '2px 2px 16px rgba(0, 0, 0, 0.36)'};
  color: ${PALETTE.TABLE_CONTENT};
`;
