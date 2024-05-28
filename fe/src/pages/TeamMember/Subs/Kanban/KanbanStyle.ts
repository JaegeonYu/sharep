import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const IssuesWrapper = styled.article`
  flex: 1;
  padding: 16px 0px;
  width: 30%;
  height: 100%;
  border-radius: 12px;
  background-color: white;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);
`;

export const IssuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: calc(100% - 36px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 12px 16px 0px 16px;
`;

export const KanbanTitle = styled.h1`
  width: calc(100% - 32px);
  height: 36px;
  padding: 0px 8px 4px 8px;
  margin: 0px 16px;
  position: relative;
  border-bottom: 1px solid ${PALETTE.MAIN_BACKGROUND};
`;
