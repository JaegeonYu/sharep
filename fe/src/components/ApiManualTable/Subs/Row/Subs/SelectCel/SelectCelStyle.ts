import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const OptionUlWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  background-color: white;
  position: absolute;
  bottom: -0%;
  left: -0%;
  transform: translate(-0%, 99%);
  visibility: hidden;
  border-radius: 0px 0px 6px 6px;
`;

export const OptionLi = styled.li`
  width: calc(100%);
  display: flex;
  justify-content: center;
  padding: 6px 0px;
`;

export const Wrapper = styled.button<{ $fixedWidth: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: ${({ $fixedWidth }) => $fixedWidth};
  min-width: 120px;
  min-height: fit-content;
  color: ${PALETTE.TABLE_CONTENT};
  position: relative;

  &:disabled {
    background-color: ${PALETTE.MAIN_BACKGROUND};
  }

  &:focus-within {
    * {
      cursor: pointer;
    }

    & {
      background-color: white;
      border-radius: 6px 6px 0px 0px;
      box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.36);
    }

    ${OptionUlWrapper} {
      visibility: visible;
      box-shadow: 2px 16px 16px rgba(0, 0, 0, 0.36);
    }
  }
`;

export const Palceholder = styled.span``;
