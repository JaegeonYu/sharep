export interface CommitProps {
  description: string;
  createdAt: string;
  user: {
    nickname: string;
    roles: ('FRONT_END' | 'BACK_END' | 'INFRA' | 'DESIGNER')[];
    userImageUrl?: string;
  };
  imageUrl?: string;
}
