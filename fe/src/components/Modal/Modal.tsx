import React, { useState } from 'react';
import * as S from './ModalStyle';
import * as T from '@/types';
import * as Comp from '@/components';
import { modalDataState } from '@/stores/atoms/modal';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';
import { useModal } from '@/customhooks';
import { X } from 'lucide-react';
import * as API from '@/apis';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { userState } from '@/stores';

export default function Modal({ modalId, title, subTitle, children, btnText }: T.ModalProps) {
  const queryClient = useQueryClient();
  const { closeModal } = useModal(modalId);
  const { projectId, manualId } = useParams();
  const { isOpen, isValid } = useRecoilValue(modalDataState(modalId));
  const user = useRecoilValue(userState);

  const createNewProjectMutation = useMutation({
    mutationKey: [{ func: `create-new-project` }],
    mutationFn: API.project.createNewProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [{ projectList: `projectList` }] });
    },
  });

  const createNewJobMutation = useMutation({
    mutationKey: [{ func: `create-new-job`, projectId }],
    mutationFn: API.project.createNewJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [{ func: `get-job-list`, projectId }] });
    },
  });

  const editImg = useMutation({
    mutationKey: [{ func: `edit-img` }],
    mutationFn: API.account.editImg,
    onSuccess: () => {
      console.log('here');
      queryClient.invalidateQueries({ queryKey: [{ userinfo: `user-info` }] });
      queryClient.invalidateQueries({ queryKey: [{ projectList: `projectList` }] });
    },
  });

  const inviteNewMembersMutation = useMutation({
    mutationKey: [{ func: `invite-new-members` }, projectId],
    mutationFn: API.project.inviteMembers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [{ projectList: `projectList` }] });
    },
  });

  const handleCreateButtonClick = useRecoilCallback(({ snapshot }) => async () => {
    const contents = (await snapshot.getPromise(modalDataState(modalId))).contents;
    try {
      if (contents) {
        switch (modalId) {
          case 'project':
            {
              const result = processMemberData(contents.members as T.MemberInvitationFormProps['members']);
              if (result) {
                await createNewProjectMutation.mutateAsync({
                  title: contents.title,
                  bio: contents.bio,
                  members: result,
                });
              } else throw Error;
            }
            break;
          case 'job':
            if (contents.issueId) {
              await createNewJobMutation.mutateAsync({
                projectId: Number(projectId),
                newJob: contents as T.JobCreationFormProps,
              });
            } else {
              alert('작업을 연결할 이슈를 선택해주세요.');
              throw Error;
            }
            break;
          case 'infra-job':
            await createNewJobMutation.mutateAsync({
              projectId: Number(projectId),
              newJob: contents as T.InfraJobCreationFormProps,
            });
            if (contents.notiUsers.length > 0) {
              let accountIdArray: any[] = [];
              contents.notiUsers.map((user: any) => {
                accountIdArray.push(user.account.id);
              });

              try {
                const res = await API.project.sendInfraAlarm({
                  projectId: Number(projectId),
                  issueId: Number(manualId),
                  targetmember: accountIdArray,
                });
              } catch (error: any) {
                console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEE', error);
              }
            }
            break;
          case 'project-secretKey':
            break;
          case 'edit':
            await editImg.mutateAsync({
              newJob: contents as T.EditProps,
            });
            break;
          default:
            if (modalId.includes('invitation')) {
              const result = processMemberData(contents.members as T.MemberInvitationFormProps['members']);
              if (result) {
                await inviteNewMembersMutation.mutateAsync({
                  projectId: Number(modalId.split('-')[1]),
                  members: result,
                });
              } else throw Error;
            }
            break;
        }
      }

      closeModal();
    } catch (error) {
      console.error(error);
    }
  });

  const handleModalClose = () => {
    closeModal();
  };

  return isOpen ? (
    <S.ModalBackdrop onClick={handleModalClose}>
      <S.ModalWrapper onClick={e => e.stopPropagation()}>
        <S.ModalContent>
          {/* header */}
          <S.ModalHeader>
            <S.ModalHeaderContent>
              <S.ModalTitle>{title}</S.ModalTitle>
              <S.ModalSubTitle>{subTitle}</S.ModalSubTitle>
            </S.ModalHeaderContent>
            <S.CloseButton onClick={handleModalClose}>
              <X />
            </S.CloseButton>
          </S.ModalHeader>

          {/* body */}
          <S.ModalBody>{children}</S.ModalBody>

          {/* footer */}
          <S.ModalFooter>
            <S.BtnWrapper $isValid={true}>
              <Comp.MainColorBtn bgc={false} disabled={false} onClick={handleModalClose}>
                취소
              </Comp.MainColorBtn>
            </S.BtnWrapper>
            <S.BtnWrapper $isValid={isValid}>
              <Comp.MainColorBtn bgc={isValid} disabled={!isValid} onClick={() => isValid && handleCreateButtonClick()}>
                {btnText ? btnText : '생성'}
              </Comp.MainColorBtn>
            </S.BtnWrapper>
          </S.ModalFooter>
        </S.ModalContent>
      </S.ModalWrapper>
    </S.ModalBackdrop>
  ) : null;
}

function processMemberData(members: T.MemberInvitationFormProps['members']) {
  const hasMemberWithoutRole = members.some(member => Object.values(member.roles).every(hasRole => !hasRole));

  if (hasMemberWithoutRole) {
    alert('담당 역할이 선택되지 않은 팀원이 있습니다.');
    return null;
  }

  return members.map(member => ({
    id: member.id,
    roles: Object.entries(member.roles)
      .filter(([_, hasRole]) => hasRole)
      .map(([role, _]) => role) as T.RoleBadgeProps['role'][],
  }));
}
