import * as T from '@types';
import React from 'react';

export interface CommitHistoryProps extends Omit<T.CommitProps, 'disabled'> {}

export interface FilterProps {
  type: {
    member: { id: number; nickname: string } | null;
    role: Extract<T.RoleBadgeProps, 'role'> | null;
    issue: { id: number; issueName: string } | null;
  };
  icon: React.JSX.Element;
  label: string;
}
