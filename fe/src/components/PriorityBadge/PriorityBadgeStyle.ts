import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const Wrapper = styled.div<{ $bgColor: string }>`
  width: fit-content;
  height: fit-content;
  padding: 4px 6px;
  border-radius: 6px;
  font-size: 12px;
  color: ${PALETTE.SUB_BLACK};
  background-color: ${({ $bgColor }) => $bgColor};
`;
