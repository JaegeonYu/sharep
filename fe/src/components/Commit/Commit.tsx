import React, { useState } from 'react';
import * as S from './CommitStyle';
import * as T from '@/types';
import * as Comp from '@/components';
import { PALETTE } from '@/styles';
import { ChevronDown } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export default function Commit({
  name,
  description,
  createdAt,
  imageUrl,
  member: { accountId, nickname, roles, userImageUrl },
  disabled,
  type,
}: T.CommitProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.CommitWrapper>
      <S.CommitInfo onClick={() => setIsOpen(!isOpen)}>
        {!disabled ? (
          <S.AccordionIconButton>
            <S.AccordionIcon $isOpen={isOpen}>
              <ChevronDown color={PALETTE.LIGHT_BLACK} />
            </S.AccordionIcon>
          </S.AccordionIconButton>
        ) : (
          <div style={{ width: '24px', height: '24px' }}></div>
        )}
        <S.CommitContent>
          <S.CommitMessage>
            {/* 작업 메시지 */}
            <S.StyledText color={PALETTE.SUB_BLACK} fontWeight={600}>
              {name}
            </S.StyledText>
            {/* 유저 정보 + 작업 완료 시간 */}
            <S.CommitUserInfo>
              <Comp.UserImg size="sm" path={userImageUrl} />
              <S.StyledText color={PALETTE.LIGHT_BLACK} fontSize={12}>
                {nickname}
              </S.StyledText>
              <S.RoleBadgeList>
                {roles.map((role, index) => (
                  <Comp.RoleBadge key={`${accountId}-role-${index}`} role={role} selectAble={false} />
                ))}
              </S.RoleBadgeList>
              <S.StyledText color={PALETTE.LIGHT_BLACK} fontSize={10}>
                작업 완료
              </S.StyledText>
              <S.StyledText color={PALETTE.LIGHT_BLACK} fontSize={10}>
                {dayjs(createdAt).locale('ko').fromNow()}
              </S.StyledText>
            </S.CommitUserInfo>
          </S.CommitMessage>
        </S.CommitContent>
        {imageUrl && <S.Img width={60} height={60} radius={10} src={imageUrl} />}
      </S.CommitInfo>
      {!disabled && isOpen && (
        <S.CommitDetailContainer>
          <S.CommitContentDetail>
            <S.CommitText color={PALETTE.SUB_BLACK} fontSize={16}>
              {name}
            </S.CommitText>

            {!type ? (
              <S.CommitText color={PALETTE.LIGHT_BLACK} fontSize={14}>
                {description}
              </S.CommitText>
            ) : (
              <>
                <S.Divider />

                <Comp.QuillEditor
                  width="100%"
                  height="400px"
                  value={description}
                  // value={}
                  readonly={true}
                  hiddenTooltip={true}
                  placeholder="내용을 입력하세요."
                />
              </>
            )}
          </S.CommitContentDetail>
          <S.CommitImageDetail>{imageUrl && <S.Img src={imageUrl} />}</S.CommitImageDetail>
        </S.CommitDetailContainer>
      )}
    </S.CommitWrapper>
  );
}
