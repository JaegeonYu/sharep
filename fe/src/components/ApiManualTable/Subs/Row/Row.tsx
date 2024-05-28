/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import * as S from './RowStyle';
import * as T from '@types';
import * as API from '@apis';
import * as Sub from './Subs';
import { MANUAL_CONSTANTS } from '@/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

interface ReqBody {
  request: string | null;
  response: string | null;
  url: string | null;
  description: string | null;
  method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE' | null;
}

export default function Row({ data, idx, readonly }: T.ApiRowProps) {
  const queryClient = useQueryClient();
  const { projectId } = useParams();

  const { mutate: updateApi } = useMutation({
    mutationFn: ({ reqBody }: { reqBody: ReqBody }) =>
      API.project.updateApi({ projectId: Number(projectId), id: data.id, reqBody }),
    onSuccess: res => {
      if (res.status === 204) {
        queryClient.invalidateQueries({ queryKey: [{ func: `get-api-list`, projectId }] });
      }
    },
  });
  const handleApiUpdate = ({ key, value }: { key: string; value: any }) => {
    if (!('description' in data)) return;
    if (!readonly) {
      const body: ReqBody = { ...data, [key]: value };
      updateApi({ reqBody: body });
    }
  };

  const { mutate: deleteAssignee } = useMutation({
    mutationFn: ({ accountId }: { accountId: number }) =>
      API.project.deleteIssueAssignees({ projectId: Number(projectId), issueId: data.id, accountId }),
    onSuccess: res => {
      if (res.status === 200) {
        queryClient.invalidateQueries({ queryKey: [{ func: `get-api-list`, projectId }] });
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
        queryClient.invalidateQueries({ queryKey: [{ func: `get-api-list`, projectId }] });
      }
    },
  });
  const handleCreateAssignee = ({ accountId }: { accountId: number }) => {
    createAssignee({ accountId: accountId });
  };

  return (
    <S.RowWrapper>
      {MANUAL_CONSTANTS.API.map(({ key, fixedWidth, celType }) => {
        const using = key as keyof T.API.DetailApi;
        const state = isDetailApiIssue(data)
          ? data[using as keyof T.API.DetailApi]
          : data[using as keyof T.API.SimpleApi];
        const mapKey = `api-table-cell-${key}-${idx}`;

        if (celType === 'TEXT') {
          return (
            <Sub.TextAreaCel
              fixedWidth={fixedWidth}
              initialState={state as string}
              usingFor={using}
              key={mapKey}
              readonly={readonly}
              onUpdate={handleApiUpdate}
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
              onUpdate={handleApiUpdate}
            />
          );
        }
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
      })}
    </S.RowWrapper>
  );
}

function isDetailApiIssue(data: T.API.DetailApi | T.API.SimpleApi): data is T.API.DetailApi {
  return (data as T.API.DetailApi).assignees !== undefined;
}
interface CreateCelTypeParam {
  key: keyof T.API.DetailApi;
  fixedWidth: string;
  celType: 'TEXT' | 'SELECT' | 'ASSIGNEES';
  idx: number;
}
