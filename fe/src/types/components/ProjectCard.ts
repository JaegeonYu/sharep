export interface ProjectCardProps {
  id: string;
  title: string;
  bio: string;
  accounts: string[] | null;
  createdAt: string | null;
  add: boolean;
}
