import React from 'react';
import * as S from './TableBtnStyle';
import * as G from '@/styles';

import { Plus } from 'lucide-react';

export default function TableBtn() {
  return (
    <>
      <S.Wrapper>
        <Plus color={G.PALETTE.LIGHT_BLACK}></Plus>새로 만들기
      </S.Wrapper>
    </>
  );
}
