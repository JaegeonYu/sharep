import * as S from './HistoryBtnStyle';
import * as G from '@/styles';
import { History, Plus } from 'lucide-react';

export default function HistoryBtn() {
  return (
    <>
      <S.Wrapper>
        <History color={G.PALETTE.MAIN_WHITE} size={14}></History>작업 기록
      </S.Wrapper>
    </>
  );
}
