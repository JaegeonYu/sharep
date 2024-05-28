import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as L from '@layouts';
import * as T from '@/types';
import * as S from './InfraManualDetailStyle';
import * as Comp from '@components';
import * as API from '@/apis';
import { PALETTE } from '@/styles';
import { BriefcaseBusiness, ChevronDown, CircleDotDashed, GitCommitHorizontal, UsersRound } from 'lucide-react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useModal } from '@/customhooks';
import { useQueries } from '@tanstack/react-query';

export default function InfraManualDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { projectId, manualId, issueName } = useParams();
  const navigate = useNavigate();
  const infraModal = useModal('infra-job');

  const [openFilter, setOpenFilter] = useState<keyof T.FilterProps['type'] | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<T.FilterProps['type']>({
    accountId: { id: null, data: null },
    roleType: { id: null, data: null },
    issueId: { id: null, data: null },
  });

  const [
    { data: jobListResponse, isSuccess: jobListSuccess, isFetching: jobListeFetching, refetch: jobListRefetch },
    { data: memberListResponse, isSuccess: memberListSuccess, isFetching: memberListFetching },
  ] = useQueries({
    queries: [
      {
        queryKey: [{ func: `get-job-list`, projectId, searchParams, manualId }],
        queryFn: () =>
          API.project.getJobList({
            projectId: Number(projectId),
            accountId: Number(searchParams.get('accountId')),
            issueId: Number(manualId),
            roleType: searchParams.get('roleType') as Extract<T.RoleBadgeProps, 'role'>,
          }),
      },
      {
        queryKey: [{ func: `get-member-list`, projectId }],
        queryFn: () => API.project.getProjectMemberList({ projectId: Number(projectId) }),
      },
    ],
  });

  const groupedCommits = useMemo(() => {
    if (!jobListResponse) return [];
    return jobListResponse && groupCommitsByDate(jobListResponse.data);
  }, [jobListResponse]);

  const handleModalOpen = () => {
    infraModal.openModal({
      name: '',
      description: '',
      notiUsers: [],
    });
  };

  const infraListClick = () => {
    navigate(`/projects/${projectId}/infra-manual`);
  };

  return (
    <>
      <S.CommitHistoryWrapper>
        <S.Header>
          <S.HeaderTitle>
            <S.TitleText color={PALETTE.MAIN_BLACK} fontSize={40} fontWeight={700} onClick={infraListClick}>
              <>인프라 명세서</>
            </S.TitleText>
            <S.StyledText color={PALETTE.MAIN_BLACK} fontSize={40} fontWeight={700}>
              <>&nbsp;&gt;&nbsp;</>
            </S.StyledText>
            <S.StyledText color={PALETTE.MAIN_BLACK} fontSize={40} fontWeight={700}>
              <>{issueName}</>
            </S.StyledText>
          </S.HeaderTitle>
          <div>
            <S.FilterWrapper>
              <S.CommitAddBtn onClick={handleModalOpen}>
                <Comp.Add />
              </S.CommitAddBtn>
              <Comp.Modal modalId="infra-job" title="새 작업 작성">
                <Comp.InfraJobCreationForm modalId="infra-job" />
              </Comp.Modal>
            </S.FilterWrapper>
          </div>
        </S.Header>
        <S.Divider />
        {Object.entries(groupedCommits).map(([date, commits]) => (
          <div key={`commits-date-${date}`}>
            <S.CommitDateWrapper>
              <S.CommitIconContainer>
                <GitCommitHorizontal size={16} />
              </S.CommitIconContainer>
              <S.StyledText color={PALETTE.LIGHT_BLACK}>{date}</S.StyledText>
            </S.CommitDateWrapper>
            <S.CommitList>
              {commits.map(commit => (
                <Comp.Commit key={`commit-${commit.id}`} {...commit} disabled={false} />
              ))}
            </S.CommitList>
          </div>
        ))}
      </S.CommitHistoryWrapper>
    </>
  );
}

const filters: {
  type: keyof T.FilterProps['type'];
  icon: React.JSX.Element;
  label: string;
}[] = [
  { type: 'accountId', icon: <UsersRound color={PALETTE.LIGHT_BLACK} size={14} />, label: '팀원' },
  { type: 'roleType', icon: <BriefcaseBusiness color={PALETTE.LIGHT_BLACK} size={14} />, label: '직무' },
  { type: 'issueId', icon: <CircleDotDashed color={PALETTE.LIGHT_BLACK} size={14} />, label: '이슈' },
];

function groupCommitsByDate(commits: T.CommitHistoryProps[]): Record<string, T.CommitHistoryProps[]> {
  return commits.reduce((acc, commit) => {
    const date = commit.createdAt.split('T')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(commit);
    return acc;
  }, {} as Record<string, T.CommitHistoryProps[]>);
}
