import * as T from '@/types';

export interface NotiProps {
  id: number;
  issueId: number;
  type: 'FEATURE' | 'SCREEN' | 'PRIVATE';
  message: string;
  unread: boolean;
  createdAt: string;
  member: {
    memberId?: number;
    nickname: string;
    roles: Extract<T.RoleBadgeProps, 'role'>[];
    // userImageUrl?: string;
  };
}
