import * as S from './MainColorBtnStyle';
import * as G from '@/styles';
import * as T from '@/types';

/**
 * children => 버튼내용
 * bgc => boolean true : 배경 시그니처 색  / false : 흰배경
 */
export default function MainColorBtn({ children, bgc, disabled }: T.MainColorBtnProps) {
  return (
    <>
      <S.Wrapper $flag={bgc} disabled={disabled}>
        {children}
      </S.Wrapper>
    </>
  );
}
