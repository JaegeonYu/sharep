export interface IssueProps {
  id: number;
  name: string;
  commit: { title: string; createAt: string } | null;
  assignees: { name: string; url: string }[];
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  dragAble: boolean;
}
