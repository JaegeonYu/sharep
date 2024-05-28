import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const ManualWrapper = styled.main`
  width: 100%;
  height: fit-content;
  padding: 24px;
  overflow-x: scroll;
  overflow-y: hidden;
  border-radius: 12px;
`;

export const TableWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 12px;
`;

export const CreateNewRowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 42px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 12px;

  & > span {
    color: ${PALETTE.LIGHT_BLACK};
  }
`;

export const StyledText = styled.span<{ color?: string; fontSize?: number; fontWeight?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 40px;
`;
