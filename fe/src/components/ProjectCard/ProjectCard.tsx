import React, { useState } from 'react';
import * as S from './ProjectCardStyle';
import * as T from '@/types';
import { PALETTE } from '@/styles';
import * as Comp from '@/components';
import { CirclePlus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@/customhooks';
import { useRecoilValue } from 'recoil';
import { userState } from '@/stores/atoms/loadUser';

interface TooltipData {
  nickname: string;
  email: string;
}

export default function ProjectCard({ title, bio, accounts, add, id }: T.ProjectCardProps) {
  const navigate = useNavigate();
  const invitationModal = useModal(`invitation-${id}`);
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
  const user = useRecoilValue(userState);

  const handleMouseEnter = (nickname: any, email: any) => {
    setTooltipData({ nickname, email });
  };

  const handleMouseLeave = () => {
    setTooltipData(null);
  };

  const handleCardClick = () => {
    if (id !== 0) {
      navigate(`/projects/${id}`);
    }
  };

  return (
    <>
      <S.Card className="hover-moving" onClick={handleCardClick}>
        <S.CardTextWrapper>
          <S.StyledText color={PALETTE.SUB_BLACK} fontWeight={700} fontSize={20} $add={add}>
            {title}
          </S.StyledText>
          {!add ? (
            <S.StyledText color={PALETTE.LIGHT_BLACK} fontWeight={500} fontSize={14}>
              {bio}
            </S.StyledText>
          ) : (
            <S.AddWrapper>
              <Plus size={18} color={PALETTE.LIGHT_BLACK} />
              <S.StyledText color={PALETTE.LIGHT_BLACK} fontWeight={500} fontSize={14}>
                {bio}
              </S.StyledText>
            </S.AddWrapper>
          )}
        </S.CardTextWrapper>
        {!add ? (
          <S.ImgWrapper>
            {accounts?.map((img: any, idx) => (
              <S.UserWrapper key={idx}>
                <Comp.UserImg size="sm" path={img.imageUrl} />
                <S.Tooltip aria-label={`${img.nickname} - ${img.email}`}>
                  {img.nickname}
                  <br />
                  {img.email}
                </S.Tooltip>
              </S.UserWrapper>
            ))}
            {user && accounts && user.id === accounts[0].id && (
              <S.InvitationBtn
                onClick={e => {
                  e.stopPropagation();
                  invitationModal.openModal({
                    members: [],
                  });
                }}
              >
                <CirclePlus color={PALETTE.LIGHT_BLACK} />
              </S.InvitationBtn>
            )}
          </S.ImgWrapper>
        ) : (
          <div style={{ width: '32px', height: '32px', visibility: 'hidden' }}>hello</div>
        )}
      </S.Card>
      <Comp.Modal
        modalId={`invitation-${id}`}
        title="프로젝트 팀원 추가"
        subTitle={`${title} 프로젝트에 아직 추가하지 않은 팀원들을 추가해보세요.`}
      >
        <Comp.MemberInvitationForm modalId={`invitation-${id}`} projectId={Number(id)} />
      </Comp.Modal>
    </>
  );
}
