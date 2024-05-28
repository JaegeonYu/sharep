import { NoneSideBarLayout } from '@/layouts';
import * as S from './MypageStyle';
import * as GS from '@/components/Grass/GrassStyle';
import * as G from '@/styles';
import * as T from '@/types';
// import * as API from '@/apis/projects';
import * as API from '@/apis';
import { GalleryGridWrapper, UserImg } from '@/components';
import ProjectGridWrapper from '@/components/ProjectGridWrapper/ProjectGridWrapper';

import Grass from '@/components/Grass/Grass';
import * as Comp from '@/components';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '@/stores/atoms/loadUser';
import { Pencil, LogOut } from 'lucide-react';
import { useModal } from '@/customhooks';
import { useNavigate } from 'react-router';
////////////////////////DUMMY
// const issueList = [
//   ...Array.from({ length: 7 }, (_, index) => ({
//     id: `${index + 1} 페이지`,
//     title: 'SCREEN',
//     bio: 'Lorem ipsum',
//     accounts: ['/youjack.png', '/lee-jae-yong.png'],
//     createdAt: '2024.04.27',
//     add: false,
//   })),
// ];
// //이건 add 추가
// const modifiedIssueList = issueList.map(issue => ({
//   ...issue,
//   add: false,
// }));

////////////////////////////DUMMY

export default function Mypage() {
  const [clickedYear, setClickedYear] = useState(2024);
  const editModal = useModal('edit');
  const setUserState = useSetRecoilState(userState);
  const navigate = useNavigate();

  //   useEffect(() => console.log(clickedYear, 'CY'), [clickedYear]);

  const user = useRecoilValue(userState);

  // user 상태 사용
  // console.log(user);
  const {
    data: projectListResponse,
    isSuccess: projectListSuccess,
    isFetched: projectListFetched,
    isPending: projectListPending,
  } = useQuery({
    queryKey: [{ projectList: `projectList` }],
    queryFn: () => API.project.getProjectList(),
    select: data => data.data,
    retry: false,
    // enabled: !!initalflag,
  });

  const {
    data: userinfoResponse,
    isFetched: userinfoFetched,
    isPending: userinfoPending,
  } = useQuery({
    queryKey: [{ userinfo: `user-info` }],
    queryFn: () =>
      API.account.account().then(res => {
        if (res) {
          console.log(res.data, 'HIuser');
          setUserState(res.data);
        } else {
          // console.log('grass? ', res.data);
        }

        return res.data;
      }),
    retry: false,
  });

  const {
    data: grassResponse,
    isFetched: grassFetched,
    isPending: grassPending,
  } = useQuery({
    queryKey: [{ grass: `grass` }],
    queryFn: () =>
      API.project.getGrass().then(res => {
        if (res.status === 204) {
          // console.log('HI');
          return { grassResponse: '' };
        } else {
          // console.log('grass? ', res.data);
        }

        return res.data;
      }),
    retry: false,
    // enabled: !!initalflag,
  });

  const handleModalOpen = () => {
    editModal.openModal({
      imageFile: null,
    });
  };

  const logoutClick = () => {
    localStorage.removeItem('token');
    setUserState(null);
    navigate('/');
  };

  return (
    <>
      <NoneSideBarLayout>
        <S.Wrapper>
          <S.HeaderWrapper>
            <S.Edit>
              <S.ProfileWrapper>
                <Comp.UserImg size="lg" path={user?.imageUrl} />
                <S.ProfileTextWrapper>
                  <S.ProfileLogout>
                    <LogOut size={18} style={{ visibility: 'hidden' }}></LogOut>

                    <S.Font $size="24px" $weight="600">
                      {user?.nickname}
                    </S.Font>
                    <LogOut size={18} onClick={logoutClick} style={{ cursor: 'pointer' }}></LogOut>
                  </S.ProfileLogout>
                  <S.Font $size="16px" $weight="400" style={{ color: `${G.PALETTE.LIGHT_BLACK}` }}>
                    {user?.email}
                  </S.Font>
                </S.ProfileTextWrapper>
              </S.ProfileWrapper>

              <Pencil size={18} onClick={handleModalOpen} style={{ cursor: 'pointer' }} />

              <Comp.Modal modalId="edit" title="프로필 변경" subTitle="나를 나타내는 이미지를 선택해보세요.">
                <Comp.EditForm modalId="edit" />
              </Comp.Modal>
            </S.Edit>

            <S.GrassWrapper>
              <S.GrassTextWrapper>
                <S.Font $size="20px" $weight="700">
                  잔디
                </S.Font>
                <S.GrassYearWrapper>
                  <S.GrassYear>{clickedYear}</S.GrassYear>
                  {/* {years?.map((year, idx) => (
                    <S.GrassYear
                      key={idx}
                      onClick={() => setClickedYear(idx)}
                      selected={idx === clickedYear ? true : false}
                    >
                      {year}
                    </S.GrassYear>
                  ))} */}
                </S.GrassYearWrapper>
              </S.GrassTextWrapper>
              {grassFetched ? (
                <>
                  <S.GrassHeader>
                    <S.Font $size="16px" $weight="400">
                      {grassResponse.jobCount}개의 작업
                    </S.Font>
                    <S.GrassStep>
                      <S.Font $size="12px" $weight="400" style={{ marginRight: 4 }}>
                        단계
                      </S.Font>
                      {[...Array(5)].map((_, idx) => (
                        <GS.GridSquare key={idx} $active={idx} />
                      ))}
                    </S.GrassStep>
                  </S.GrassHeader>
                  <Grass grass={grassResponse} />
                </>
              ) : (
                <></>
              )}
            </S.GrassWrapper>
          </S.HeaderWrapper>
          {projectListSuccess ? <ProjectGridWrapper projectList={projectListResponse}></ProjectGridWrapper> : <></>}
        </S.Wrapper>
      </NoneSideBarLayout>
    </>
  );
}
