import React from 'react';
import * as S from './SecretKeyFormStyle';
import * as T from '@/types';
import * as Comp from '@/components';
import * as Icon from '@/assets';
import { Info } from 'lucide-react';
import { PALETTE } from '@/styles';
import { useModal } from '@/customhooks';
import { useRecoilValue } from 'recoil';
import { modalDataState } from '@/stores/atoms/modal';
import { useParams } from 'react-router-dom';

export default function SecretKeyForm({ modalId }: Pick<T.ModalProps, 'modalId'>) {
  const { updateContentByKey } = useModal<T.SecretKeyFormProps>(modalId);
  const { contents } = useRecoilValue(modalDataState(modalId));
  const { projectId } = useParams();
  return (
    <S.Wrapper>
      <S.FormItem>
        <Comp.InputWithLabel.Label labelFor="url">
          <S.StyledLabel>URL</S.StyledLabel>
        </Comp.InputWithLabel.Label>
        <S.InputContainer>
          <S.UrlInput id="url" value={`https://share-p.com/api/projects/${projectId}/hook`} disabled />
        </S.InputContainer>
      </S.FormItem>
      {/* 프로젝트 token */}
      <S.FormItem>
        <Comp.InputWithLabel.Label labelFor="secretKey">
          <S.StyledLabel>
            Token
            <S.SecretKeyInfo>
              <S.Icon $fillColor={PALETTE.LIGHT_BLACK} $strokeColor={PALETTE.MAIN_WHITE}>
                <Info size={12} />
              </S.Icon>
              <S.StyledText color={PALETTE.LIGHT_BLACK} fontSize={10}>
                repository의 read 권한이 있는 token을 등록해주세요.
              </S.StyledText>
            </S.SecretKeyInfo>
          </S.StyledLabel>
        </Comp.InputWithLabel.Label>
        <S.InputContainer>
          <S.StyledInput
            $icon={true}
            id="secretKey"
            type="text"
            value={contents.secretKey}
            onChange={event => updateContentByKey('secretKey', event.target.value)}
          />
          <S.Icon $fillColor={PALETTE.LIGHT_BLACK} $position="absolute">
            <Icon.GitIcon />
          </S.Icon>
        </S.InputContainer>
      </S.FormItem>
    </S.Wrapper>
  );
}
