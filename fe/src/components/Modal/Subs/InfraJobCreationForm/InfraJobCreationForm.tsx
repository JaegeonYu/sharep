import React, { useEffect, useRef, useState } from 'react';
import * as S from './InfraJobCreationFormStyle';
import * as T from '@/types';
import * as Comp from '@/components';
import * as API from '@/apis';
import { PALETTE } from '@/styles';
import { useModal } from '@/customhooks';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { modalDataState } from '@/stores/atoms/modal';
import { Plus, X } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

export default function InfraJobCreationForm({ modalId }: Pick<T.ModalProps, 'modalId'>) {
  const { updateContentByKey, updateIsValid } = useModal<T.InfraJobCreationFormProps>(modalId);
  const { contents } = useRecoilValue(modalDataState(modalId));
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState('left');
  const addbBtnRef = useRef<HTMLDivElement | null>(null);
  const notiContainerRef = useRef<HTMLDivElement | null>(null);
  const { projectId, manualId } = useParams();

  const {
    data: memberListResponse,
    isSuccess: memberListSuccess,
    isFetching: memberListFetching,
  } = useQuery({
    queryKey: [{ func: `get-member-list`, projectId }],
    queryFn: () => API.project.getProjectMemberList({ projectId: Number(projectId) }),
  });

  const updateValidityAndIssueId = () => {
    if (contents.description.length > 0 && contents.name.length > 0) {
      updateIsValid(true);
      updateContentByKey('issueId', Number(manualId));
      // console.log(contents, 'contents======');
    }
  };

  const handleAddNotiUser = (userToAdd: T.InfraJobCreationFormProps['notiUsers'][number]) => {
    const isAlreadyAdded = contents.notiUsers.some(
      (user: T.InfraJobCreationFormProps['notiUsers'][number]) => user.account.id === userToAdd.account.id,
    );

    if (!isAlreadyAdded) {
      updateContentByKey('notiUsers', [...contents.notiUsers, userToAdd]);
    }

    setIsDropdownVisible(false);
  };

  // 추가된 팀원 목록에서 팀원 삭제
  const handleRemoveNotiUser = (selectedUser: T.InfraJobCreationFormProps['notiUsers'][number]) => () => {
    updateContentByKey(
      'notiUsers',
      contents.notiUsers.filter(
        (notiUser: T.InfraJobCreationFormProps['notiUsers'][number]) => notiUser.account.id !== selectedUser.account.id,
      ),
    );

    setIsDropdownVisible(false);
  };

  const toggleDropdown = () => {
    if (!isDropdownVisible) handleDropdownPosition();
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleDropdownPosition = () => {
    const notiContainerRect = notiContainerRef.current?.getBoundingClientRect();
    const addBtnRect = addbBtnRef.current?.getBoundingClientRect();

    if (notiContainerRect && addBtnRect) {
      setDropdownPosition(addBtnRect.right + 250 < notiContainerRect.right ? 'left' : 'right');
    }
  };

  // 화면의 크기에 따라서 dropdown의 위치 동적으로 조정
  useEffect(() => {
    handleDropdownPosition();

    window.addEventListener('resize', handleDropdownPosition);

    return () => {
      window.removeEventListener('resize', handleDropdownPosition);
    };
  }, [addbBtnRef, notiContainerRef]);

  // dropdown 외 다른 컴포넌트 클릭시 dropdown 안 보이게 설정
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (addbBtnRef.current && !addbBtnRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [addbBtnRef]);

  return (
    <S.Wrapper>
      <S.FormItem>
        <Comp.InputWithLabel.Label labelFor="name">작업명</Comp.InputWithLabel.Label>
        <S.StyledInput
          id="name"
          type="text"
          value={contents.name}
          onChange={event => {
            updateContentByKey('name', event.target.value);
            updateValidityAndIssueId(); // Check validity when name changes
          }}
        />
      </S.FormItem>
      <S.FormItem>
        <S.StyledText fontSize={16} fontWeight={400}>
          알림
        </S.StyledText>
        <S.NotiContainer ref={notiContainerRef}>
          {contents.notiUsers.map((user: T.InfraJobCreationFormProps['notiUsers'][number]) => (
            <S.NotiUser key={`accountId-${user.account.id}`}>
              <S.UserInfo>
                <Comp.UserImg size="sm" path={user.account.imageUrl} />
                <S.StyledText color={PALETTE.LIGHT_BLACK} fontSize={12}>
                  {user.account.nickname}
                </S.StyledText>
                <S.RoleBadgeList>
                  {user.roles.map(role => (
                    <Comp.RoleBadge key={`noti-user-role-${role}`} role={role} selectAble={false} />
                  ))}
                </S.RoleBadgeList>
              </S.UserInfo>
              <S.DeleteBtn onClick={handleRemoveNotiUser(user)}>
                <X size={10} color={PALETTE.SUB_BLACK} />
              </S.DeleteBtn>
            </S.NotiUser>
          ))}
          <S.AddUserBtn ref={addbBtnRef}>
            <S.Icon onClick={toggleDropdown}>
              <Plus size={10} color={PALETTE.SUB_BLACK} />
            </S.Icon>
            {isDropdownVisible && (
              <S.Dropdown $dropdownPosition={dropdownPosition}>
                {memberListResponse?.data.map(user => (
                  <S.DropdowntItem key={`infra-job-accountId-${user.id}`} onClick={() => handleAddNotiUser(user)}>
                    <S.UserInfo>
                      <S.UserProfile>
                        <Comp.UserImg size="sm" path={user.account.imageUrl} />
                        <S.StyledText color={PALETTE.LIGHT_BLACK} fontSize={12}>
                          {user.account.nickname}
                        </S.StyledText>
                      </S.UserProfile>
                      <S.RoleBadgeList>
                        {user.roles.map(role => (
                          <Comp.RoleBadge key={`infra-noti-${user.id}-${role}`} role={role} selectAble={false} />
                        ))}
                      </S.RoleBadgeList>
                    </S.UserInfo>
                  </S.DropdowntItem>
                ))}
              </S.Dropdown>
            )}
          </S.AddUserBtn>
        </S.NotiContainer>
      </S.FormItem>

      <S.EditorWrapper>
        <Comp.QuillEditor
          width="100%"
          height="400px"
          value={contents.description}
          // value={}
          hiddenTooltip={false}
          stateSetter={newDescriptionOrUpdater => {
            typeof newDescriptionOrUpdater === 'function'
              ? updateContentByKey('description', newDescriptionOrUpdater(contents.description))
              : updateContentByKey('description', newDescriptionOrUpdater);
            updateValidityAndIssueId(); // Check validity when description changes
          }}
          placeholder="내용을 입력하세요."
        />
      </S.EditorWrapper>
    </S.Wrapper>
  );
}

// const dummyUsers: T.InfraJobCreationFormProps['notiUsers'][number][] = [
//   {
//     accountId: 1,
//     nickname: '임서정',
//     roles: ['FRONT_END', 'DESIGNER'],
//   },
//   {
//     accountId: 2,
//     nickname: '오상훈',
//     roles: ['INFRA', 'BACK_END'],
//     userImageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg',
//   },
//   {
//     accountId: 3,
//     nickname: '조성규',
//     roles: ['FRONT_END', 'BACK_END'],
//     userImageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/2.jpg',
//   },
//   {
//     accountId: 4,
//     nickname: '김성제',
//     roles: ['INFRA', 'BACK_END'],
//     userImageUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/3.jpg',
//   },
// ];
