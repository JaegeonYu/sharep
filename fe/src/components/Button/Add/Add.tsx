import * as S from './AddStyle';
import * as G from '@/styles';
import { Plus } from 'lucide-react';

export default function Add() {
  return (
    <>
      <S.Wrapper>
        <Plus color={G.PALETTE.MAIN_WHITE} size={14}></Plus>작업 추가
      </S.Wrapper>
    </>
  );
}
