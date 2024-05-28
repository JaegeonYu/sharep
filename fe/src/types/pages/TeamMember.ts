import * as T from '@types';
import React from 'react';

export interface KanbanProps {
  state: 'YET' | 'NOW' | 'DONE';
  issues: T.API.SimpleIssue[];
  dragEnterdState: null | 'YET' | 'NOW' | 'DONE';
  setDragEnterdState: React.Dispatch<React.SetStateAction<null | 'YET' | 'NOW' | 'DONE'>>;
  refetchKanbansResponse: () => any;
  dragAble: boolean;
  deleteAble: boolean;
  // setIssues: React.Dispatch<React.SetStateAction<Omit<T.IssueProps, 'dragAble'>[]>>;
}

export interface ContributionsChartProps {
  dataList: { [date: string]: number } | null;
}

export interface YesterdayWorkProps {
  account: {
    email: string;
    id: number;
    imageUrl: string;
    nickname: string;
  };
  id: number;
  roles: Extract<T.RoleBadgeProps, 'role'>[];
  summary: string | null;
}

export interface MemberListResponse {
  account: {
    email: string;
    id: number;
    imageUrl: string;
    nickname: string;
  };
  id: number;
  roles: Extract<T.RoleBadgeProps, 'role'>[];
  summary: string | null;
}
