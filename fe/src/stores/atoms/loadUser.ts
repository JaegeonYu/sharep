import { atom } from 'recoil';

interface User {
  id: number;
  email: string;
  nickname: string;
  imageUrl: string | null;
  // 다른 필요한 사용자 정보 추가 가능
}

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});
