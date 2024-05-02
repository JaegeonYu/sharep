import * as T from '@types';
import React from 'react';

export interface CananProps {
  state: 'YET' | 'NOW' | 'DONE';
  issues: Omit<T.IssueProps, 'dragAble'>[];
  setIssues: React.Dispatch<React.SetStateAction<Omit<T.IssueProps, 'dragAble'>[]>>;
}
