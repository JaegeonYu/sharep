import styled from 'styled-components';
import { PALETTE } from '@/styles';

export const Wrapper = styled.div`
  width: 4000px;
  height: 100%;
`;

export const DaySection = styled.section`
  width: 64px;
  height: 100%;
  border-left: 2px solid ${PALETTE.GANTT_CHART};
  position: relative;
`;

export const IssueBar = styled.article`
  width: 100%;
  height: 32px;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: ${PALETTE.GRASS_1};
`;
