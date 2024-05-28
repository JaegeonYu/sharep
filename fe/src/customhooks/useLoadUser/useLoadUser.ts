import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { account } from '@/apis/accounts';
import { userState } from '@/stores/atoms/loadUser';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import * as API from '@/apis';

interface User {
  // 사용자 정보에 대한 타입 정의
  id: number;
  email: string;
  nickname: string;
  imageUrl: string | null;
  // 필요한 다른 사용자 정보 추가 가능
}

export const useLoadUser = (): User | null => {
  const [user, setUser] = useRecoilState<User | null>(userState);
  const navigate = useNavigate();
  const location = useLocation();
  // const flag=false

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰 가져오기
      if (token && !user) {
        // 토큰이 있고, 현재 사용자 정보가 없는 경우
        try {
          const response = await account();
          if (response) {
            setUser(response.data); // Recoil 상태 업데이트
          }
        } catch (error) {
          console.error('사용자 정보를 불러오는데 실패했습니다.', error);
          // 적절한 에러 처리 로직
        }
      }
      if (!token) {
        console.log('NO TK');
        if (location.pathname !== '/login' && location.pathname !== '/' && location.pathname !== '/register') {
          navigate('/');
        }
      }
    };

    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, setUser, location]); // user 또는 setUser가 변경될 때마다 이 effect를 재실행

  return user; // 현재 로그인한 사용자 정보를 반환
};
