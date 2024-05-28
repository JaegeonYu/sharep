import React from 'react';
import * as L from '@/layouts';
import * as Comp from '@/components';
import { useModal } from '@/customhooks';

export default function SeoJeong() {
  const infraJobModal = useModal('infra-job');
  const secretKeyModal = useModal('project-secretKey');

  const handleModalOpen = (modalId: string) => {
    if (modalId === 'infra-job') {
      infraJobModal.openModal({
        name: '',
        description: '',
        notiUsers: [],
      });
    }

    if (modalId === 'project-secretKey') {
      secretKeyModal.openModal({
        secretKey: '',
      });
    }
  };

  return (
    <L.SideBarLayout>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#f7f7f7',
          padding: '25px',
        }}
      >
        {/* 새 인프라 작업 생성 모달 */}
        <button style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleModalOpen('infra-job')}>
          새 인프라 작업 생성 모달
        </button>
        <Comp.Modal modalId="infra-job" title="인프라 명세서 > 이슈 제목">
          <Comp.InfraJobCreationForm modalId="infra-job" />
        </Comp.Modal>
        {/* 프로젝트 토큰 등록 모달 */}
        <button
          style={{ border: '1px solid black', cursor: 'pointer' }}
          onClick={() => handleModalOpen('project-secretKey')}
        >
          프로젝트 토큰 등록 모달
        </button>
        <Comp.Modal modalId="project-secretKey" title="프로젝트 토큰 등록" btnText="등록">
          <Comp.SecretKeyForm modalId="project-secretKey" />
        </Comp.Modal>
      </div>
    </L.SideBarLayout>
  );
}
