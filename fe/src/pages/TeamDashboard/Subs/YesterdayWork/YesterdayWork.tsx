import React from 'react';
import * as T from '@types';
import * as Sub from '..';
import * as S from './YesterdayWorkStyle';

export default function YesterdayWork({ account, roles, summary }: T.YesterdayWorkProps) {
  return (
    <S.YesterdayWork>
      <Sub.TeamMember
        accountId={account.id}
        userImageUrl={account.imageUrl}
        nickname={account.nickname}
        roles={roles}
      />
      <p aria-label={summary !== null ? summary : ''}>{summary !== null ? summary : '요약을 할 작업이 없습니다.'}</p>
    </S.YesterdayWork>
  );
}
