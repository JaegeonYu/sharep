import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  width: 100%;
  height: 100%;
  padding: 56px 0px;
  background-color: ${PALETTE.MAIN_BACKGROUND};
`;
