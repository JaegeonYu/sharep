import * as T from '@types';
import React from 'react';

export interface CananProps {
  state: 'YET' | 'NOW' | 'DONE';
  issues: Omit<T.IssueProps, 'dragAble'>[];
  dragEnterdState: null | 'YET' | 'NOW' | 'DONE';
  setDragEnterdState: React.Dispatch<React.SetStateAction<null | 'YET' | 'NOW' | 'DONE'>>;
  setIssues: React.Dispatch<React.SetStateAction<Omit<T.IssueProps, 'dragAble'>[]>>;
}
