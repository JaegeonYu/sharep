import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const RowWrapper = styled.li`
  display: flex;
  width: 100%;
  min-width: fit-content;
  height: fit-content;
  min-height: fit-content;
  border-bottom: 1px solid ${PALETTE.TABLE_BORDER};

  & > div:nth-of-type(1) {
    font-weight: 700;
  }
`;
