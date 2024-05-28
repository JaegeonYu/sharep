import React from 'react';
import * as Comp from '@components';
import * as L from '@layouts';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { PALETTE } from '@/styles';
import * as API from '@/apis';
import * as S from './InfraManualStyle';

export default function InfraManual() {
  const { projectId } = useParams();

  const {
    data: infraIssueListResponse,
    isSuccess: infraIssueListSuccess,
    isFetching: infraIssueListLoading,
  } = useQuery({
    queryKey: [{ func: `get-infra-issues`, projectId }],
    queryFn: () => API.project.getInfraIssueList({ projectId: Number(projectId) }),
    select: data => data.data,
  });

  console.log(infraIssueListResponse);

  return (
    // <L.SideBarLayout>
    <S.Wrapper>
      <S.Header>
        <S.StyledText color={PALETTE.MAIN_BLACK} fontSize={40} fontWeight={700}>
          인프라 명세서
        </S.StyledText>
      </S.Header>
      {infraIssueListSuccess && <Comp.GalleryGridWrapper issueList={infraIssueListResponse} type="INFRA" />}
    </S.Wrapper>
    // </L.SideBarLayout>
  );
}
