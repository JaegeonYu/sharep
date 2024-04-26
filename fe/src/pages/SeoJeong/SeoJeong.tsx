import GalleryGridWrapper from '@/components/GalleryGridWrapper/GalleryGridWrapper';
import { PALETTE } from '@/styles';
import React from 'react';

export default function SeoJeong() {
  return (
    <div
      style={{
        margin: 'auto',
        width: '90%',
        height: '90%',
        gap: 10,
        background: '#f7f7f7',
        border: '1px solid black',
      }}
    >
      <GalleryGridWrapper></GalleryGridWrapper>
    </div>
  );
}
