import React from 'react';
import * as S from './GalleryGridWrapperStyle';
import * as T from '@/types';
import GalleryCard from '../GalleryCard/GalleryCard';

export default function GalleryGridWrapper({}: T.GalleryGridWrapperProps) {
  return (
    <S.Grid>
      <S.CardList>
        {Array.from({ length: 5 }).map((_, index) => (
          <GalleryCard key={index}></GalleryCard>
        ))}
      </S.CardList>
    </S.Grid>
  );
}
