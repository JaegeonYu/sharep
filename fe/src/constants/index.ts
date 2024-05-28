import * as T from '@types';

export const MANUAL_CONSTANTS: {
  API: {
    name: string;
    celType: 'TEXT' | 'SELECT' | 'ASSIGNEES';
    iconName: 'current-state-title' | 'main-title-icon' | 'text-content-title';
    fixedWidth: string;
    key: keyof T.API.DetailApi;
    [key: string]: any;
  }[];
  FEATURE: {
    name: string;
    celType: 'TEXT' | 'SELECT' | 'ASSIGNEES' | 'CONNECTEDISSUES';
    iconName: 'current-state-title' | 'main-title-icon' | 'text-content-title';
    fixedWidth: string;
    key: keyof T.API.DetailIssue;
    [key: string]: any;
  }[];
} = {
  API: [
    { name: '기능명', key: 'issueName', fixedWidth: '200px', celType: 'TEXT', iconName: 'main-title-icon' },
    { name: '진행 상태', key: 'state', fixedWidth: '120px', celType: 'SELECT', iconName: 'current-state-title' },
    { name: '메소드', key: 'method', fixedWidth: '120px', celType: 'SELECT', iconName: 'main-title-icon' },
    { name: 'API Path', key: 'url', fixedWidth: '200px', celType: 'TEXT', iconName: 'text-content-title' },
    { name: '설명', key: 'description', fixedWidth: '312px', celType: 'TEXT', iconName: 'main-title-icon' },
    { name: '요청값', key: 'request', fixedWidth: '172px', celType: 'TEXT', iconName: 'text-content-title' },
    { name: '응답값', key: 'response', fixedWidth: '172px', celType: 'TEXT', iconName: 'text-content-title' },
    { name: '담당자', key: 'assignees', fixedWidth: '136px', celType: 'ASSIGNEES', iconName: 'text-content-title' },
  ],
  FEATURE: [
    { name: '요구사항명', key: 'epic', fixedWidth: '200px', celType: 'TEXT', iconName: 'main-title-icon' },
    { name: '기능명', key: 'issueName', fixedWidth: '200px', celType: 'TEXT', iconName: 'text-content-title' },
    { name: '우선순위', key: 'priority', fixedWidth: '120px', celType: 'SELECT', iconName: 'main-title-icon' },
    {
      name: '사용화면',
      key: 'connectedIssues',
      fixedWidth: '200px',
      celType: 'CONNECTEDISSUES',
      iconName: 'text-content-title',
    },
    { name: '상세 기능', key: 'description', fixedWidth: '312px', celType: 'TEXT', iconName: 'text-content-title' },
    { name: '진행 상태', key: 'state', fixedWidth: '120px', celType: 'SELECT', iconName: 'current-state-title' },
    { name: '담당자', key: 'assignees', fixedWidth: '160px', celType: 'ASSIGNEES', iconName: 'text-content-title' },
    { name: '시작 날짜', key: 'startedAt', fixedWidth: '160px', celType: 'TEXT', iconName: 'text-content-title' },
    { name: '종료 날짜', key: 'finishedAt', fixedWidth: '160px', celType: 'TEXT', iconName: 'text-content-title' },
  ],
};
