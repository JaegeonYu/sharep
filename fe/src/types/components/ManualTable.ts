import React from 'react';
import * as T from '@types';

export type ManualTableProps =
  | {
      usingFor: 'API';
      dataList: Array<T.API.DetailApi>;
      readonly: boolean;
    }
  | {
      usingFor: 'FEATURE';
      dataList: Array<T.API.DetailIssue>;
      readonly: boolean;
    };

export type RowProps =
  | {
      usingFor: 'API';
      data: T.API.DetailApi;
      idx: number;
      readonly: boolean;
    }
  | {
      usingFor: 'FEATURE';
      data: T.API.DetailIssue;
      idx: number;
      readonly: boolean;
    };

export type CelProps =
  | {
      initialState: string;
      fixedWidth: string;
      readonly: false;
    }
  | {
      initialState: string;
      fixedWidth: string;
      readonly: true;
      refetch: () => void;
    };

export type SelectCelProps =
  | {
      initialState: string;
      fixedWidth: string;
      usingFor: 'PRIORITY' | 'STATE' | 'METHOD';
      readonly: false;
    }
  | {
      initialState: string;
      fixedWidth: string;
      usingFor: 'PRIORITY' | 'STATE' | 'METHOD';
      readonly: true;
      refetch: () => void;
    };

export type SelectAssigneesCelProps =
  | {
      initialState: T.API.Assignee[];
      fixedWidth: string;
      usingFor: 'ASSIGNEES';
      readonly: false;
    }
  | {
      initialState: T.API.Assignee[];
      fixedWidth: string;
      usingFor: 'ASSIGNEES';
      readonly: true;
      refetch: () => void;
    };
