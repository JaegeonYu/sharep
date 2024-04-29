import styled from 'styled-components';
import * as G from '@/styles';

export const Wrapper = styled.div`
  width: fit-content;
  padding: 4px 10px;
  background-color: ${G.PALETTE.MAIN_COLOR};
  border: solid 1px #d0d7de;
  column-gap: 6px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;
