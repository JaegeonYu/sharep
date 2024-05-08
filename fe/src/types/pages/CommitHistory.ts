import * as T from '@types';
import React from 'react';

export interface CommitHistoryProps extends Omit<T.CommitProps, 'disabled'> {}

export interface FilterProps {
  type: 'member' | 'role' | 'issue';
  icon: React.JSX.Element;
  label: string;
}
