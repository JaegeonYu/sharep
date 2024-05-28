/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import * as S from './RowStyle';
import * as T from '@types';
import * as API from '@apis';
import * as Sub from './Subs';
import { MANUAL_CONSTANTS } from '@/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router';

export default function Row({ dataType, data, idx, readonly }: T.FeatureRowProps) {
  const queryClient = useQueryClient();
  const { projectId } = useParams();

  const { mutate: sendAlram } = useMutation({
    mutationFn: () => API.project.sendFeatureManualAlram({ projectId: Number(projectId) }),
  });

  const { mutate: modifyIssue } = useMutation({
    mutationFn: ({ body }: { body: Body }) =>
      API.project.updateIssue({ issueId: data.id, projectId: Number(projectId), updatedIssue: body }),
    onSuccess: res => {
      if (res.status === 204) {
        queryClient.invalidateQueries({ queryKey: [{ func: `get-detail-feature-issues`, projectId }] });
        sendAlram();
      }
    },
  });
  const handleModifyissue = ({ key, value }: { key: keyof Body; value: string }) => {
    const body = { ...data, [key]: value };
    modifyIssue({ body });
  };

  const { mutate: deleteAssignee } = useMutation({
    mutationFn: ({ accountId }: { accountId: number }) =>
      API.project.deleteIssueAssignees({ projectId: Number(projectId), issueId: data.id, accountId }),
    onSuccess: res => {
      if (res.status === 200) {
        queryClient.invalidateQueries({ queryKey: [{ func: `get-detail-feature-issues`, projectId }] });
        sendAlram();
      }
    },
  });
  const handleDeleteAssignee = ({ accountId }: { accountId: number }) => {
    deleteAssignee({ accountId: accountId });
  };

  const { mutate: createAssignee } = useMutation({
    mutationFn: ({ accountId }: { accountId: number }) =>
      API.project.createIssueAssignee({ projectId: Number(projectId), issueId: data.id, accountId }),
    onSuccess: res => {
      if (res.status === 201) {
        queryClient.invalidateQueries({ queryKey: [{ func: `get-detail-feature-issues`, projectId }] });
        sendAlram();
      }
    },
  });
  const handleCreateAssignee = ({ accountId }: { accountId: number }) => {
    createAssignee({ accountId: accountId });
  };

  const { mutate: deleteConnectionIssue } = useMutation({
    mutationFn: ({ connectionId }: { connectionId: number }) =>
      API.project.deleteConnectionWithIssue({ projectId: Number(projectId), connectionId: connectionId }),
    onSuccess: res => {
      if (res.status === 204) {
        queryClient.invalidateQueries({ queryKey: [{ func: `get-detail-feature-issues`, projectId }] });
        sendAlram();
      }
    },
  });
  const handleDeleteConnectionIssue = ({ connectionId }: { connectionId: number }) => {
    deleteConnectionIssue({ connectionId: connectionId });
  };

  const { mutate: createConnectionIssue } = useMutation({
    mutationFn: ({ body }: { body: { featureIssueId: number; screenIssueId: number } }) =>
      API.project.createConnectionWithIssue({ projectId: Number(projectId), body }),
    onSuccess: res => {
      if (res.status === 201) {
        queryClient.invalidateQueries({ queryKey: [{ func: `get-detail-feature-issues`, projectId }] });
        sendAlram();
      }
    },
  });
  const handleCreateConnectionIssue = ({ screenIssueId }: { screenIssueId: number }) => {
    const body = { featureIssueId: data.id, screenIssueId: screenIssueId };
    createConnectionIssue({ body });
  };

  return (
    <S.RowWrapper>
      {MANUAL_CONSTANTS.FEATURE.map(({ key, fixedWidth, celType }) => {
        const using = key;
        const state = isDetailIssue(data)
          ? data[using as keyof T.API.DetailIssue]
          : data[using as keyof T.API.SimpleIssue];
        const mapKey = `feature-table-cell-${key}-${idx}`;

        if (celType === 'TEXT') {
          return (
            <Sub.TextAreaCel
              fixedWidth={fixedWidth}
              initialState={state as string}
              usingFor={using}
              key={mapKey}
              readonly={readonly}
              onUpdate={handleModifyissue}
            />
          );
        } else if (celType === 'SELECT') {
          return (
            <Sub.SelectCel
              fixedWidth={fixedWidth}
              initialState={state as string}
              usingFor={using.toUpperCase() as 'PRIORITY' | 'STATE' | 'METHOD'}
              key={mapKey}
              readonly={readonly}
              onUpdate={handleModifyissue}
            />
          );
        } else if (celType === 'ASSIGNEES') {
          return (
            <Sub.SelectAssigneesCel
              fixedWidth={fixedWidth}
              initialState={state as T.API.Assignee[]}
              usingFor="ASSIGNEES"
              key={mapKey}
              readonly={readonly}
              onCreate={handleCreateAssignee}
              onDelete={handleDeleteAssignee}
            />
          );
        } else if (dataType !== 'SIMPLE') {
          return (
            <Sub.SelectConnectedIssue
              fixedWidth={fixedWidth}
              initialState={state as T.API.SimpleIssue[]}
              usingFor="CONNECTEDISSUES"
              key={mapKey}
              readonly={readonly}
              onCreate={handleCreateConnectionIssue}
              onDelete={handleDeleteConnectionIssue}
            />
          );
        }
      })}
    </S.RowWrapper>
  );
}

function isDetailIssue(data: T.API.DetailIssue | T.API.SimpleIssue): data is T.API.DetailIssue {
  return (data as T.API.DetailIssue).connectedIssues !== undefined;
}

interface Body {
  issueName: string | null;
  description: string | null;
  epic: string | null;
  priority: T.PriorityBadgeProps[`priority`] | null;
}
