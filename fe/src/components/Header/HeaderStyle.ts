import styled from 'styled-components';
import * as G from '@/styles';

export const Header = styled.div`
  height: 50px;
  background-color: gray;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 50px;
  background-color: ${G.PALETTE.MAIN_BACKGROUND};
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: 100%;
  margin-right: 24px;
  /* background-color: ${G.PALETTE.NO_GRASS}; */
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: fit-content;
  column-gap: 12px;
  margin-right: 20px;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const ContentsImg = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 1px rgba(31, 35, 40, 0.15);
  z-index: 1;
  /* background-color: greenyellow; */
`;
