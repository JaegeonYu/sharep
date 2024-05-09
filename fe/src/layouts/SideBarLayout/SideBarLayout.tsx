import React from 'react';
import * as S from './SideBarLayoutStyle';
import * as Comp from '@components';

export default function SideBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.Wrapper>
      <Comp.SideBar />
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
}
