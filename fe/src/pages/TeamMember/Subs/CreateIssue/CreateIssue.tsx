import React, { useEffect, useState } from 'react';
import * as S from './CreateIssueStyle';
import * as T from '@types';
import * as API from '@apis';
import * as Comp from '@components';
import { PALETTE } from '@/styles';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '@/stores/atoms/loadUser';

export function PlusButton({ onClick }: { onClick: (...args: any) => void }) {
  return <S.CreateNewIssue onClick={onClick} size={24} color={PALETTE.LIGHT_BLACK} className="hover-bg-dark" />;
}

export function InputForm({
  setVisible,
  refetchKanbansResponse,
}: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  refetchKanbansResponse: () => void;
}) {
  const { projectId } = useParams();
  const user = useRecoilValue(userState);
  const [value, setValue] = useState('');
  const { mutate: submit } = useMutation({
    mutationFn: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      return API.project.createNewIssue({
        projectId: Number(projectId),
        newIssue: { issueName: value, type: 'PRIVATE' },
      });
    },
    onSuccess: res => {
      if (res.status === 201) {
        setVisible(false);
        setValue('');
        refetchKanbansResponse();
      }
    },
  });

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') setVisible(false);
    });
    return () => {
      window.removeEventListener('keydown', () => undefined);
    };
  }, [setVisible]);

  return (
    <S.FormWrapper onSubmit={submit}>
      <S.LabelContainer labelFor="create-new-private-issue">
        <S.TitleInput
          id="create-new-private-issue"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="이슈의 이름을 입력해주세요."
        />
        <div>
          <span>취소하려면 Esc를 누르세요.</span>
          <Comp.UserImg size="32px" path={user?.imageUrl} />
        </div>
      </S.LabelContainer>
    </S.FormWrapper>
  );
}

interface NewIssue {
  issueName: string;
  description?: string;
  type: T.IssueProps['type'];
  epic?: string;
  priority?: T.PriorityBadgeProps['priority'];
}
