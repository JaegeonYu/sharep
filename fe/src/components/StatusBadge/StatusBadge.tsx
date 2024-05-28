import React from 'react';
import * as S from './StatusBadgeStyle';
import * as T from '@types';

const STATUS_COLOR_PALETTE: {
  [key: string]: { BG_COLOR: string; FONT_COLOR: string; DOT_COLOR: string; TEXT: string };
} = {
  YET: { BG_COLOR: '#E3E2E0', FONT_COLOR: '#595754', DOT_COLOR: '#91918E', TEXT: '시작 전' },
  NOW: { BG_COLOR: '#D3E5EF', FONT_COLOR: '#193347', DOT_COLOR: '#5B97BD', TEXT: '진행 중' },
  DONE: { BG_COLOR: '#E9FFEF', FONT_COLOR: '#409261', DOT_COLOR: '#409261', TEXT: '완료' },
};

export default function StatusBadge({ status }: T.StatusBadgeProps) {
  return (
    <S.Wrapper $bgColor={STATUS_COLOR_PALETTE[status].BG_COLOR} $fontColor={STATUS_COLOR_PALETTE[status].FONT_COLOR}>
      <S.Dot $bgColor={STATUS_COLOR_PALETTE[status].DOT_COLOR} />
      {STATUS_COLOR_PALETTE[status].TEXT}
    </S.Wrapper>
  );
}
