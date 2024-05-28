import React from 'react';
import * as T from '@types';

export interface IssueProps {
  id: number;
  issueName: string;
  description: string | null;
  assignees: { accountId: number; id: number; imageUrl: string; name: string; state: 'YET' | 'NOW' | 'DONE' }[] | null;
  priority: 'HIGH' | 'MEDIUM' | 'LOW' | null;
  jobs: { name: string; createdAt: string }[] | null;
  epic: string | null;
  state: 'YET' | 'NOW' | 'DONE';
  type: 'SCREEN' | 'PRIVATE' | 'FEATURE' | 'INFRA';

  deleteAble: boolean;
  dragAble:
    | false
    | { setter: React.Dispatch<React.SetStateAction<null | number>>; onDrop: (e: React.DragEvent) => void };
}
