import React, { useEffect } from 'react';
import * as S from './FeatureManualStyle';
import * as T from '@types';
import * as API from '@apis';
import * as Comp from '@components';
import * as L from '@layouts';
import { Plus } from 'lucide-react';
import { PALETTE } from '@/styles';
import { useMutation, useQueries, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { EventSourcePolyfill } from 'event-source-polyfill';

const END_POINT = import.meta.env.VITE_END_POINT;
const { CLOSED, CONNECTING, OPEN } = { CLOSED: 2, CONNECTING: 0, OPEN: 1 };

export default function FeatureManual() {
  const queryClient = useQueryClient();
  const { projectId } = useParams();

  const [{ data: featureIssuesResponse, isFetching: isFeatureIssuesResponseFetching }] = useQueries({
    queries: [
      {
        queryKey: [{ func: `get-detail-feature-issues`, projectId }],
        queryFn: () =>
          API.project.getProjectDetailIssueList({
            projectId: Number(projectId),
            issueType: 'FEATURE',
            accountId: null,
          }),
      },
    ],
  });

  const { mutate: sendAlram } = useMutation({
    mutationFn: () => API.project.sendFeatureManualAlram({ projectId: Number(projectId) }),
  });

  const { mutate: createIssue } = useMutation({
    mutationFn: ({ body }: { body: HandlerParams }) =>
      API.project.createNewIssue({ projectId: Number(projectId), newIssue: { ...body, type: 'FEATURE' } }),
    onSuccess: res => {
      if (res.status === 201) {
        queryClient.invalidateQueries({ queryKey: [{ func: `get-detail-feature-issues`, projectId }] });
        sendAlram();
      }
    },
  });
  const handleCreateNewIssue = ({ issueName, description, epic, priority }: HandlerParams) => {
    const body = { issueName, description, epic, priority };
    createIssue({ body });
  };

  useEffect(() => {
    const CONNECTION_URL = `${END_POINT}/notifications/projects/${projectId}/subscriptions`;
    const accessToken = localStorage.getItem('token');
    const eventSource = new EventSourcePolyfill(CONNECTION_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
      heartbeatTimeout: 10 * 60 * 1000 * 6, // 60분
    });

    eventSource.addEventListener('sse', (e: any) => {
      const response = JSON.parse(e.data);
      if (response.message === 'refetch') {
        queryClient.invalidateQueries({ queryKey: [{ func: `get-detail-feature-issues`, projectId }] });
      }
    });

    // eventSource.onerror = () => {
    //   eventSource.close();
    // };

    return () => {
      eventSource.close();
    };
  }, [projectId, queryClient]);

  return (
    <S.ManualWrapper>
      <S.StyledText color={PALETTE.MAIN_BLACK} fontSize={40} fontWeight={700}>
        기능 명세서
      </S.StyledText>
      <S.TableWrapper>
        <Comp.FeatureManualTable readonly={false} dataList={featureIssuesResponse?.data || []} dataType="DETAIL" />
        <S.CreateNewRowButton onClick={() => handleCreateNewIssue({})}>
          <Plus color={PALETTE.LIGHT_BLACK} size={14}></Plus>
          <span>작업 추가</span>
        </S.CreateNewRowButton>
      </S.TableWrapper>
    </S.ManualWrapper>
  );
}

interface HandlerParams {
  issueName?: string;
  description?: string;
  epic?: string;
  priority?: T.PriorityBadgeProps['priority'];
}
