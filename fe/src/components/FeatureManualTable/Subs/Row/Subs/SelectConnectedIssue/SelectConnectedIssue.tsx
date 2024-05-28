import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as S from './SelectConnectedIssueStyle';
import * as T from '@types';
import * as API from '@apis';
import * as Comp from '@components';
import { X } from 'lucide-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { PALETTE } from '@/styles';

export default function SelectConnectedIssue({
  initialState,
  fixedWidth,
  readonly,
  onCreate,
  onDelete,
}: T.FeatureSelectConnectedIssueCelProps) {
  const { projectId } = useParams();
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');

  const alreadyConnected = useMemo(() => {
    return initialState.map(state => state.id);
  }, [initialState]);

  const { data: screenIssuesResponse, isFetching: isMembersResponseFeting } = useQuery({
    queryKey: [{ func: `get-screen-issue-list`, projectId }],
    queryFn: () => API.project.getScreenIssueList({ projectId: Number(projectId) }),
  });
  const regexScreenIssues = useMemo(() => {
    if (!screenIssuesResponse?.data) return [];
    const regex = new RegExp(value.replace(/\s+/g, ''), 'i');
    return screenIssuesResponse.data.filter(issue => regex.test(issue.issueName.replace(/\s+/g, '')));
  }, [value, screenIssuesResponse]);

  const { mutate: createNewScreenIssue } = useMutation({
    mutationFn: ({ body }: { body: Body }) =>
      API.project.createNewIssue({ projectId: Number(projectId), newIssue: body }),
    onSuccess: res => {
      if (res.status === 201) {
        onCreate({ screenIssueId: res.data.id });
        queryClient.invalidateQueries({ queryKey: [{ func: `get-detail-feature-issues`, projectId }] });
      }
    },
  });
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (readonly || value === '') return;

    e.preventDefault();
    const body = { issueName: value, description: '', type: 'SCREEN' as 'SCREEN', epic: '', priority: 'LOW' as 'LOW' };
    createNewScreenIssue({ body });
    setValue('');
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCelClick = (toggledValue: boolean) => {
    if (inputRef.current === null || readonly) return;

    setIsFocus(prev => !prev);
    if (toggledValue) inputRef.current.focus();
    else inputRef.current.blur();
  };

  const handleListOptionClick = ({ id }: { id: number }) => {
    if (readonly) return;

    setIsFocus(() => false);
    onCreate({ screenIssueId: id });
    inputRef.current?.blur();
    handleCelClick(false);
  };

  return (
    <S.Wrapper
      className="hover-bg-dark"
      onClick={() => handleCelClick(true)}
      onFocus={() => handleCelClick(true)}
      onBlur={() => handleCelClick(false)}
      $fixedWidth={fixedWidth}
      disabled={readonly}
    >
      <S.Placeholder>
        {initialState
          .sort((x1, x2) => x1.id - x2.id)
          .map((el, i) => (
            <S.ScreenIssueWrapper key={`assignees-${el.id}-${i}`}>
              {el.issueName}
              <span onClick={() => !readonly && onDelete({ connectionId: el.connectionId as number })}>
                <X size={12} color={PALETTE.LIGHT_BLACK} />
              </span>
            </S.ScreenIssueWrapper>
          ))}
      </S.Placeholder>
      <S.OptionUlWrapper>
        <S.InputWrapper onSubmit={handleOnSubmit}>
          <S.CreateNewIssueInput
            ref={inputRef}
            value={value}
            onChange={handleOnChange}
            type="text"
            autoautoComplete="off"
            id="create-new-screen-issue-input"
            placeholder="기존 화면을 선택하거나 생성할 수 있습니다."
          />
        </S.InputWrapper>
        {regexScreenIssues.map((res, idx) => {
          return (
            !alreadyConnected.includes(res.id) && (
              <S.OptionLi
                className="hover-bg-dark"
                aria-valuetext={res.issueName}
                key={`assignees-li-${res.id}-${idx}`}
                onClick={() => handleListOptionClick({ id: res.id })}
              >
                <span>{res.issueName}</span>
              </S.OptionLi>
            )
          );
        })}
      </S.OptionUlWrapper>
    </S.Wrapper>
  );
}

interface Body {
  issueName?: string;
  description?: string;
  type: 'SCREEN';
  epic?: string;
  priority: 'LOW';
}
