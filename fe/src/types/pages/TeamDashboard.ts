import * as T from '@types';

export interface TeamDashboardProps {}

export interface TeamMemberProps {
  name: string;
  image: string;
  jobs: Extract<T.JobBadgeProps, 'job'>[];
}

export interface GanttChartProps {}
