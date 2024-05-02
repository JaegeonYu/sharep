import * as T from '@types';
import React from 'react';

export interface IssueProps {
  id: number;
  name: string;
  commit: { title: string; createAt: string } | null;
  assignees: { name: string; imageUrl: string }[];
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  state: 'YET' | 'NOW' | 'DONE';
  type: 'SCREEN' | 'PRIVATE';
  dragAble: false | { setter: React.Dispatch<React.SetStateAction<number>> };
}
