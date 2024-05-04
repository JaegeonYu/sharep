export interface CommitProps {
  id?: number;
  name: string;
  description: string;
  createdAt: string;
  imageUrl?: string;
  issueId?: number;
  member: {
    memberId?: string;
    nickname: string;
    roles: ('FRONT_END' | 'BACK_END' | 'INFRA' | 'DESIGNER')[];
    userImageUrl?: string;
  };
  disabled: boolean; // accordion 열고 닫을 수 있는지
}
