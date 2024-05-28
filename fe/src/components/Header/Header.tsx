import React from 'react';
import * as S from './HeaderStyle';
import * as Comp from '@components';
import { useNavigate } from 'react-router';

export default function Header() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header>
      <S.MainWrapper>
        <S.LogoWrapper>
          <img src={'/logo.png'} height="100%" alt="위원회들" style={{ borderRadius: '10px' }}></img>
        </S.LogoWrapper>
        {/* <img src={'/logo-text.png'} height="40%" alt="위원회들"></img> */}

        <S.BtnWrapper>
          <Comp.MainColorBtn bgc={false} disabled={false} onClick={handleRegisterClick}>
            가입하기
          </Comp.MainColorBtn>
          <Comp.MainColorBtn bgc={true} disabled={false} onClick={handleLoginClick}>
            로그인
          </Comp.MainColorBtn>
        </S.BtnWrapper>
      </S.MainWrapper>
    </header>
  );
}
