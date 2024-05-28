import styled from 'styled-components';
import { PALETTE } from '@/styles';
import BaseLabelWithInput from '@/components/InputWithLabel/InputWithLabel';

export const OptionUlWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 128px;
  overflow-x: hidden;
  overflow-y: auto;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: calc(100%);
  height: 48px;
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

export const Placeholder = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  justify-content: flex-start;
`;

export const ScreenIssueWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  padding: 8px;
  border-radius: 12px;

  &:hover {
    color: white;
    background-color: ${PALETTE.MAIN_BLACK};
  }

  & > span {
    display: flex;
    padding: 4px;
    position: absolute;
    width: fit-content;
    height: fit-content;
    border-radius: 50%;
    top: -8px;
    right: -8px;
    background-color: ${PALETTE.MAIN_BACKGROUND};
    visibility: hidden;
  }

  ${Wrapper}:focus-within &:hover > span {
    visibility: visible;
  }

  & > span,
  & > div {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.36);
  }
`;

export const InputWrapper = styled.form`
  height: 48px;
  padding: 6px;
`;

export const CreateNewIssueInput = styled(BaseLabelWithInput.Input)`
  width: 100%;
  height: 100%;
  font-size: 12px;
`;
