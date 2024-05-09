import React from 'react';
import * as S from './MethodBadgeStyle';
import * as T from '@types';

const METHOD_BADGE_BG_COLOR: {
  [key: string]: string;
} = {
  GET: '#DBEDDB',
  PUT: '#FDECC8',
  PATCH: '#EBDEEE',
  POST: '#D3E5EF',
  DELETE: '#FFE2DD',
};

export default function MethodBadge({ name }: T.MethodBadgeProps) {
  return <S.Wrapper $bgColor={METHOD_BADGE_BG_COLOR[name]}>{name}</S.Wrapper>;
}
