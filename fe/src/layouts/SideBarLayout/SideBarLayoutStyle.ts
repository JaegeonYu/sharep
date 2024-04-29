import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${PALETTE.MAIN_BACKGROUND};
`;

export const Container = styled.section`
  width: calc(100% - 260px);
  height: 100%;
  padding: 56px 60px;
  overflow-x: hidden;
  overflow-y: auto;
`;
