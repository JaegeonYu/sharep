import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const Wrapper = styled.div<{ $isEditingMode: boolean; $fixedWidth: string }>`
  max-width: 100%;
  width: ${({ $fixedWidth }) => $fixedWidth};
  min-width: fit-content;
  min-height: fit-content;
  border-radius: ${({ $isEditingMode }) => $isEditingMode && '6px'};
  box-shadow: ${({ $isEditingMode }) => $isEditingMode && '2px 2px 16px rgba(0, 0, 0, 0.36)'};
  color: ${PALETTE.TABLE_CONTENT};

  * {
    cursor: ${({ $isEditingMode }) => !$isEditingMode && 'pointer'};
  }

  .ql-container.ql-snow {
    border: none;
  }

  .ql-editor {
    white-space: wrap;
    word-break: break-word;
  }

  p {
    max-width: 100%;
  }
`;
