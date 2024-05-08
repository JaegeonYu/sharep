import * as T from '@types';

export interface TeamDashboardProps {}

export interface TeamMemberProps {
  accountId: number;
  nickname: string;
  roles: Extract<T.RoleBadgeProps, 'role'>[];
  userImageUrl: string;
}

export interface GanttChartProps {}

export interface CurrentWorkProps {
  member: TeamMemberProps;
  issue: {
    description: string;
    epic: string;
    id: number;
    issueName: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    type: 'FEATURE';
  } | null;
}
