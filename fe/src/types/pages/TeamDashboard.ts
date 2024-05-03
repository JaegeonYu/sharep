import * as T from '@types';

export interface TeamDashboardProps {}

export interface TeamMemberProps {
  id: number;
  name: string;
  imageUrl: string;
  jobs: Extract<T.JobBadgeProps, 'job'>[];
}

export interface GanttChartProps {}
