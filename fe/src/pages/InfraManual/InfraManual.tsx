import React from 'react';
import * as Comp from '@components';
import * as L from '@layouts';

const infraIssueList = [
  ...Array.from({ length: 7 }, (_, index) => ({
    issueName: `인프라 이슈 ${index + 1}`,
    createdAt: '2024.04.27',
    issueType: 'PRIVATE' as 'PRIVATE',
  })),
];

export default function InfraManual() {
  return (
    <L.SideBarLayout>
      <Comp.GalleryGridWrapper issueList={infraIssueList} />
    </L.SideBarLayout>
  );
}
