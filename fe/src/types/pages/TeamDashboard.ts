import * as T from '@types';

export interface TeamDashboardProps {}

export interface TeamMemberProps {
  id: number;
  nickname: string;
  imageUrl: string;
  roles: Extract<T.RoleBadgeProps, 'role'>[];
}

export interface GanttChartProps {}
