import styled from 'styled-components';
import * as G from '@/styles';
import { InputWithLabel, MainColorBtn } from '@/components';

interface Options {
  $flag: boolean;
}

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${G.PALETTE.MAIN_BACKGROUND};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.form`
  width: 400px;
  height: fit-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04);
`;
export const LogoWrapper = styled.div`
  height: fit-content;
  row-gap: 16px;
  padding: 24px 24px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.div`
  width: 80%;
  height: 64px;
  /* background-color: blue; */
  border-radius: 90px;
  background: no-repeat top/100% url('/symbol-color.png');
`;
export const SloganWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${G.PALETTE.LIGHT_BLACK};
  font-size: 12px;
  row-gap: 4px;
`;
export const Slogan = styled.div`
  color: ${G.PALETTE.MAIN_COLOR};
  font-weight: 600;
  font-size: 14px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  padding-top: 32px;
  padding: 24px 24px;
`;
export const InputContentWrapper = styled.div`
  width: 100%;
  /* padding-top: 32px; */
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const InputWrapper = styled(InputWithLabel.Label)`
  /* background-color: red; */
  width: 100%;
  padding: 10px 14px;
  border: solid 1px ${G.PALETTE.NO_GRASS};
  border-radius: 8px;
  display: flex;
  column-gap: 8px;
`;
export const Register = styled.div`
  width: 100%;
  /* padding-top: 32px; */
  /* padding: 0px 24px; */
  display: flex;
  font-size: 14px;
  color: ${G.PALETTE.LIGHT_BLACK};
  justify-content: flex-end;
  row-gap: 12px;
  cursor: pointer;
`;
