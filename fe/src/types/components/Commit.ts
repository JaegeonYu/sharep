import * as T from '@/types';

export interface CommitProps {
  id?: number;
  name: string;
  description: string;
  createdAt: string;
  imageUrl?: string;
  issueId?: number;
  member: {
    accountId?: number;
    nickname: string;
    roles: Extract<T.RoleBadgeProps, 'role'>[];
    userImageUrl?: string;
  };
  disabled: boolean; // accordion 열고 닫을 수 있는지
}
