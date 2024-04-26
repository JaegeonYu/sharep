import Commit from '@/components/Commit/Commit';
import React from 'react';

export default function CommitHistory() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 10 }}>
      <Commit imageUrl="https://via.placeholder.com/1440x1024" />
      <Commit />
    </div>
  );
}
