import * as T from '@types';
import React from 'react';

export interface CommitHistoryProps extends Omit<T.CommitProps, 'disabled'> {}

export interface FilterProps {
  type: {
    accountId: { id: number | null; data: string | null };
    roleType: { id: number | null; data: Extract<T.RoleBadgeProps, 'role'> | null };
    issueId: { id: number | null; data: string | null };
  };
  icon: React.JSX.Element;
  label: string;
}
