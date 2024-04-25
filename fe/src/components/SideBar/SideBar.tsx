import React from 'react';
import * as S from './SideBarStyle';

export default function SideBar() {
  return (
    <>
      <S.SideBarWrapper>
        <S.SideBarProfile>
          <S.SideBarProfilePhoto>thisis</S.SideBarProfilePhoto>
          <S.SideBarProfilePhoto>thisis</S.SideBarProfilePhoto>
        </S.SideBarProfile>
        <S.SideBarProfile>NIVE</S.SideBarProfile>
      </S.SideBarWrapper>
    </>
  );
}
