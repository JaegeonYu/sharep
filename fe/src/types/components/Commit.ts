export interface CommitProps {
  name: string;
  description: string;
  createdAt: string;
  imageUrl?: string;
  // issueId: number;
  member: {
    // memberId: string;
    nickname: string;
    role: ('FRONT_END' | 'BACK_END' | 'INFRA' | 'DESIGNER')[];
    userImageUrl?: string;
  };
}
