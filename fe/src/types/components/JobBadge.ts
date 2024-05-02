export interface JobBadgeProps {
  selectAble: false | { state: boolean; onClick: (...args: any) => void };
  job: 'FRONT_END' | 'BACK_END' | 'INFRA' | 'DESIGNER';
}
