import * as T from '@types';
import React from 'react';

export interface CommitHistoryProps extends Omit<T.CommitProps, 'disabled'> {}

export interface FilterProps {
  type: {
    accountId: number | null;
    roleType: Extract<T.RoleBadgeProps, 'role'> | null;
    issueId: number | null;
  };
  icon: React.JSX.Element;
  label: string;
}
