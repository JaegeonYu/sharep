import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  background-color: ${PALETTE.MAIN_WHITE};
  border-radius: 24px;
  padding: 16px;
  gap: 20px;
`;

export const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 30px;
  padding: 24px 16px;
`;
