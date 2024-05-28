import React, { useMemo, useRef } from 'react';
import * as S from './SelectAssigneesCelStyle';
import * as T from '@types';
import * as API from '@apis';
import * as Comp from '@components';
import { X } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { PALETTE } from '@/styles';

export default function SelectAssigneesCel({
  initialState,
  fixedWidth,
  readonly,
  onCreate,
  onDelete,
}: T.ApiSelectAssigneesCelProps) {
  const { projectId } = useParams();
  const celRef = useRef<HTMLDivElement>(null);
  const alreadyAssigneesList = useMemo(() => {
    return initialState.map(state => state.accountId);
  }, [initialState]);

  const { data: membersResponse, isFetching: isMembersResponseFeting } = useQuery({
    queryKey: [{ func: `get-member-list`, projectId }],
    queryFn: () => API.project.getProjectMemberList({ projectId: Number(projectId) }),
  });

  const handleCelClick = (toggledValue: boolean) => {
    if (celRef.current === null || readonly) return;

    if (toggledValue) celRef.current.focus();
    else celRef.current.blur();
  };

  const handleListOptionClick = ({ id }: { id: number }) => {
    if (readonly) return;

    onCreate({ accountId: id });
    celRef.current?.blur();
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
        {initialState.map((el, i) => (
          <S.UserWrapper key={`assignees-${el.accountId}-${i}`}>
            <Comp.UserImg size="32px" path={el.imageUrl} />
            <button onClick={() => !readonly && onDelete({ accountId: el.accountId })}>
              <X size={12} color={PALETTE.LIGHT_BLACK} />
            </button>
          </S.UserWrapper>
        ))}
      </S.Placeholder>
      <S.OptionUlWrapper>
        {membersResponse?.data.map((res, idx) => {
          return (
            !alreadyAssigneesList.includes(res.account.id) && (
              <S.OptionLi
                className="hover-bg-dark"
                aria-valuetext={res.account.nickname}
                key={`assignees-li-${res.account.id}-${res.id}-${idx}`}
                onClick={() => handleListOptionClick({ id: res.account.id })}
              >
                <Comp.UserImg size="32px" path={res.account.imageUrl} />
                <span>{res.account.nickname}</span>
              </S.OptionLi>
            )
          );
        })}
      </S.OptionUlWrapper>
    </S.Wrapper>
  );
}
