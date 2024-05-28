import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const TableContainer = styled.ul`
  width: fit-content;
  min-width: fit-content;
  height: 100%;
  min-height: fit-content;
  padding: 20px;
  overflow: auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.05);
`;

export const TitleRowWrapper = styled.li`
  display: flex;
  width: 100%;
  min-width: fit-content;
  height: fit-content;
  min-height: fit-content;
`;

export const Title = styled.div<{ $fixedWidth: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  min-width: ${({ $fixedWidth }) => $fixedWidth};
  border-top: 1px solid ${PALETTE.TABLE_BORDER};
  border-bottom: 1px solid ${PALETTE.TABLE_BORDER};
  padding: 16px;
  font-weight: 700;
  cursor: default;

  & > span {
    font-size: 14px;
    color: ${PALETTE.TABLE_TITLE};
  }
`;

export const RowWrapper = styled.li`
  display: flex;
  width: 100%;
  min-width: fit-content;
  height: fit-content;
  min-height: fit-content;
  border-bottom: 1px solid ${PALETTE.TABLE_BORDER};

  & > div:nth-of-type(1) {
    font-weight: 700;
  }
`;
