import React from 'react';
import * as Comp from '@components';
import * as L from '@layouts';

export default function InfraManual() {
  return (
    <L.SideBarLayout>
      <Comp.GalleryGridWrapper issueList={infraIssueList} />
    </L.SideBarLayout>
  );
}

const infraIssueList = [
  ...Array.from({ length: 7 }, (_, index) => ({
    issueId: index + 1,
    issueName: `인프라 이슈 ${index + 1}`,
    createdAt: '2024.04.27',
    type: 'PRIVATE' as 'PRIVATE',
  })),
];
