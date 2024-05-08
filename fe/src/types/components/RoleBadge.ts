export interface RoleBadgeProps {
  selectAble: false | { state: boolean; onClick: (...args: any) => void };
  role: 'FRONT_END' | 'BACK_END' | 'INFRA' | 'DESIGNER';
}
