import React from 'react';
import * as S from './ProjectGridWrapperStyle';
import { ProjectGridWrapperProps } from '@/types';
import ProjectCard from '../ProjectCard/ProjectCard';
import UIMG from '@/assets/imgs/youjack.png';
import * as Comp from '@/components';
import { useModal } from '@/customhooks';
import { useRecoilValue } from 'recoil';
import { userState } from '@/stores/atoms/loadUser';

export default function ProjectGridWrapper({ projectList }: ProjectGridWrapperProps) {
  const projectModal = useModal('project');
  const user = useRecoilValue(userState);

  const handleModalOpen = () => {
    if (user) {
      projectModal.openModal({
        title: '',
        bio: '',
        members: [
          {
            id: user.id,
            email: user.email,
            nickname: user.nickname,
            imageUrl: user.imageUrl,
            roles: {
              FRONT_END: false,
              BACK_END: false,
              INFRA: false,
              DESIGNER: false,
            },
          },
        ],
      });
    }
  };

  return (
    <S.Grid>
      <S.CardList>
        <S.ProjectAddBtn onClick={handleModalOpen}>
          <ProjectCard key={0} title={'new'} bio={'새로 만들기'} id={0} accounts={null} add={true} />
        </S.ProjectAddBtn>
        <Comp.Modal
          modalId="project"
          title="새 프로젝트 생성"
          subTitle="함께할 팀원들을 추가하고 새로운 프로젝트를 생성해보세요."
        >
          <Comp.ProjectCreationForm modalId="project" />
        </Comp.Modal>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            bio={project.bio}
            id={project.id}
            accounts={project.accounts}
            add={false}
          />
        ))}
      </S.CardList>
    </S.Grid>
  );
}
