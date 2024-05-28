import React, { useState } from 'react';
import * as S from './GalleryGridWrapperStyle';
import * as T from '@/types';
import * as Comp from '@/components';
import * as API from '@/apis';
import { PALETTE } from '@/styles';
import { Plus } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '@/stores';

export default function GalleryGridWrapper({ issueList, type }: T.GalleryGridWrapperProps) {
  const [createNewCard, setCreateNewCard] = useState<boolean>(false);
  const [newIssueName, setNewIssueName] = useState<string>('');
  const { projectId, manualId } = useParams();
  const queryClient = useQueryClient();

  const user = useRecoilValue(userState);
  const accountId = user?.id;
  const createNewIssueMutation = useMutation({
    mutationKey: [{ func: `create-new-issue`, projectId }],
    mutationFn: API.project.createNewIssue,
    onSuccess: res => {
      console.log('M');
      createAssignee({ issueId: Number(res.data.id), accountId: Number(accountId) });
      // queryClient.invalidateQueries({ queryKey: [{ func: `create-issue-assignee`, projectId, manualId, accountId }] });

      queryClient.invalidateQueries({ queryKey: [{ func: `get-screen-issues`, projectId }] });
      // 아마 INFRA도 한번더 해야함
      queryClient.invalidateQueries({ queryKey: [{ func: `get-infra-issues`, projectId }] });
    },
  });

  const { mutate: createAssignee } = useMutation({
    mutationFn: ({ issueId, accountId }: { issueId: number; accountId: number }) =>
      API.project.createIssueAssignee({ projectId: Number(projectId), issueId, accountId }),
    onSuccess: () => {
      console.log('Connect Success');
    },
  });

  const handleAddBtn = () => {
    console.log('add');
    setCreateNewCard(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewIssueName(event.target.value);
  };

  const handleInputEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      createNewIssueMutation.mutate(
        {
          projectId: Number(projectId),
          newIssue: { issueName: newIssueName, type },
        },
        {
          onSuccess: () => {
            // console.log('사용');
            setCreateNewCard(false);
            setNewIssueName('');
          },
          onError: error => {
            console.log(error, 'EERR');
          },
        },
      );
    } else if (event.key === 'Escape') {
      setCreateNewCard(false);
      setNewIssueName('');
    }
  };

  return (
    <S.Grid>
      <S.CardList>
        {issueList.map(issue => (
          <Comp.GalleryCard key={`issue-${issue.id}`} issue={issue} type={type} />
        ))}
        {createNewCard ? (
          <S.Card className="hover-moving" style={{ border: `1px solid ${PALETTE.MAIN_COLOR}` }}>
            <S.CardContent>{type === 'SCREEN' ? <S.DefaultImage /> : <S.PreviewContent />}</S.CardContent>
            <S.CardText>
              <S.NewCardInput
                type="text"
                placeholder="이슈의 이름을 입력해주세요."
                value={newIssueName}
                onChange={handleInputChange}
                onKeyDown={handleInputEnter}
                autoFocus
              />
              <S.CardDate>
                <S.StyledText color={PALETTE.LIGHT_BLACK} fontSize={12}>
                  취소하려면 Esc를 누르세요.
                </S.StyledText>
              </S.CardDate>
            </S.CardText>
          </S.Card>
        ) : (
          <S.Card className="hover-moving">
            <S.CardAddBtn onClick={handleAddBtn}>
              <S.TextContainer>
                <Plus size={16} />
                <S.StyledText color={PALETTE.LIGHT_BLACK} fontSize={16}>
                  새로 만들기
                </S.StyledText>
              </S.TextContainer>
            </S.CardAddBtn>
          </S.Card>
        )}
      </S.CardList>
    </S.Grid>
  );
}
