import React from 'react';
import * as S from './NoneSideBarLayoutStyle';

export default function NoneSideBarLayout({ children }: { children: React.ReactNode }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
