import React from 'react';
import * as S from './PriorityBadgeStyle';
import * as T from '@types';

const PRIORITY_COLOR_PALETTE: {
  [key: string]: { BG_COLOR: string; TEXT: string };
} = {
  HIGH: { BG_COLOR: '#FFE2DD', TEXT: '1' },
  MEDIUM: { BG_COLOR: '#D3E5EF', TEXT: '2' },
  LOW: { BG_COLOR: '#FDECC8', TEXT: '3' },
};

export default function PriorityBadge({ priority }: T.PriorityBadgeProps) {
  return (
    <S.Wrapper $bgColor={PRIORITY_COLOR_PALETTE[priority].BG_COLOR}>{PRIORITY_COLOR_PALETTE[priority].TEXT}</S.Wrapper>
  );
}
