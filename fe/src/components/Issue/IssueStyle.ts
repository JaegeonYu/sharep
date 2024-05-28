import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const RelativeWrapper = styled.div`
  width: 100%;
  height: 116px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.05);

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: default;
  }

  *::after {
    width: 100%;
    font-size: 10px;
    white-space: pre-wrap;
    z-index: 1;
  }
`;

export const DragAbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  height: 116px;
  background-color: white;
  border-radius: 12px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;

  &:focus-within div:nth-last-of-type(1) {
    visibility: visible;
  }

  span {
    max-width: calc(100% - 32px);
    width: 100%;
    padding-top: 4px;
    vertical-align: bottom;
    text-align: left;
    font-size: 14px;
    font-weight: 700;
  }

  span:hover::after {
    content: attr(aria-label);
    position: absolute;
    top: 26px;
    left: 0;
    color: white;
    padding: 8px;
    border-radius: 4px;
    background-color: ${PALETTE.LIGHT_BLACK};
  }
`;

export const MoreButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0px;
  cursor: pointer;

  svg {
    padding: 4px;

    &:hover {
      background-color: ${PALETTE.MAIN_BACKGROUND};
      border-radius: 50%;
    }
  }
`;

export const DeleteDropBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  visibility: hidden;
  position: absolute;
  bottom: -36px;
  right: 0px;
  width: 96px;
  height: 36px;
  padding: 8px 12px;
  border-radius: 8px;
  z-index: 1;
  font-size: 14px;
  color: ${PALETTE.MAIN_RED};
  background-color: white;
  box-shadow: 0px 0px 0px 1px rgba(31, 35, 40, 0.15);
  cursor: pointer;

  &:hover {
    visibility: visible;
  }
`;

export const RecentlyCommit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 18px;
  position: relative;

  * {
    color: ${PALETTE.LIGHT_BLACK};
  }

  p {
    display: flex;
    gap: 4px;
    width: calc(100% - (42px + 8px + 24px));
  }

  p > span {
    width: calc(100% - 16px);
    height: 100%;
    text-align: left;
    font-size: 12px;
  }

  p > span:hover::after {
    content: attr(aria-label);
    position: absolute;
    top: 20px;
    left: 0;
    color: white;
    padding: 8px;
    border-radius: 4px;
    background-color: ${PALETTE.LIGHT_BLACK};
  }

  & > span {
    line-height: 16px;
    font-size: 10px;
    padding-left: 4px;
    align-self: flex-end;
  }
`;

export const AboutEtcWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PriorityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 32px;

  span {
    color: ${PALETTE.SUB_BLACK};
    font-weight: 700;
  }
`;

export const AssignessWrapper = styled.div<{ $assigneesNumber: number }>`
  width: ${({ $assigneesNumber }) => 24 * $assigneesNumber}px;
  position: relative;
`;

export const UserImgWrapper = styled.div<{ $idx: number }>`
  position: absolute;
  top: 0;
  left: ${({ $idx }) => 18 * $idx}px;
`;
