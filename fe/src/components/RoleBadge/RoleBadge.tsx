import React from 'react';
import * as S from './RoleBadgeStyle';
import * as T from '@types';

const ROLE_COLOR_PALETTE: {
  [key: string]: { BG_COLOR: string; FONT_COLOR: string; TEXT: string };
} = {
  FRONT_END: { BG_COLOR: '#FFEFF1', FONT_COLOR: '#FD5B71', TEXT: 'FE' },
  BACK_END: { BG_COLOR: '#E6FCF4', FONT_COLOR: '#07E092', TEXT: 'BE' },
  INFRA: { BG_COLOR: '#F2F2F2', FONT_COLOR: '#828282', TEXT: 'Infra' },
  DESIGNER: { BG_COLOR: '#F5EEFC', FONT_COLOR: '#9B51E0', TEXT: 'Design' },
};

export default function RoleBadge({ role, selectAble }: T.RoleBadgeProps) {
  return (
    <S.Wrapper
      $bgColor={ROLE_COLOR_PALETTE[role].BG_COLOR}
      $fontColor={ROLE_COLOR_PALETTE[role].FONT_COLOR}
      $selected={selectAble && selectAble}
    >
      {ROLE_COLOR_PALETTE[role].TEXT}
    </S.Wrapper>
  );
}
