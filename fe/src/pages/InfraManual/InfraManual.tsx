import React from 'react';
import * as Comp from '@components';
import * as L from '@layouts';

export default function InfraManual() {
  return (
    <L.SideBarLayout>
      <Comp.GalleryGridWrapper issueList={infraIssueList} type="INFRA" />
    </L.SideBarLayout>
  );
}

const infraIssueList = [
  ...Array.from({ length: 7 }, (_, index) => ({
    id: index + 1,
    issueName: `인프라 이슈 ${index + 1}`,
    createdAt: '2024.04.27',
    type: 'INFRA' as 'INFRA',
  })),
];
