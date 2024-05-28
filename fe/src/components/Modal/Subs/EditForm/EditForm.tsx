import React, { useEffect, useRef, useState } from 'react';
import * as S from './EditFormStyle';
import * as T from '@/types';
import * as Comp from '@/components';
import * as Icon from '@/assets';
import * as API from '@/apis';
import { PALETTE } from '@/styles';
import { Image as UploadImageIcon } from 'lucide-react';
import { useModal } from '@/customhooks';
import { useRecoilValue } from 'recoil';
import { modalDataState } from '@/stores/atoms/modal';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function EditForm({ modalId }: Pick<T.ModalProps, 'modalId'>) {
  const { updateContentByKey, updateIsValid } = useModal<T.EditProps>(modalId);
  const { contents } = useRecoilValue(modalDataState(modalId));
  const { projectId } = useParams();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  //   const {
  //     data: myNowIssueResponse,
  //     isSuccess: myNowIssueSuccess,
  //     isFetching: myNowIssueFetching,
  //   } = useQuery({
  //     queryKey: [{ func: `get-now-issue-about-me`, projectId }],
  //     queryFn: () => API.project.getNowIssueAboutMe({ projectId: Number(projectId) }),
  //     select: data => data.data,
  //   });

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    uploadImage(event.target.files);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    uploadImage(files);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const uploadImage = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];

      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드 가능합니다.');
        return;
      }

      updateContentByKey('imageFile', file);
      updateIsValid(true);

      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
    }
  };

  //   useEffect(() => {
  //     if (myNowIssueSuccess && myNowIssueResponse.issue) {
  //       console.log(myNowIssueResponse);
  //       updateContentByKey('issueId', myNowIssueResponse.issue.id);
  //     }
  //   }, [myNowIssueSuccess, myNowIssueResponse]);

  return (
    <S.Wrapper>
      <S.TitleContainer></S.TitleContainer>
      <S.Container onClick={handleButtonClick} onDragOver={handleDragOver} onDrop={handleDrop}>
        <S.HiddenFileInput type="file" ref={fileInputRef} onChange={handleChange} accept="image/*" />
        {imagePreviewUrl ? (
          <>
            <S.PreviewContainer>
              <S.Preview src={imagePreviewUrl} alt="이미지 미리보기" />
            </S.PreviewContainer>
            <S.UploadButton>
              <UploadImageIcon size={60} color={PALETTE.LIGHT_BLACK} />
            </S.UploadButton>
          </>
        ) : (
          <S.DefaultContainer>
            <S.ContentsImg>
              <img src={'/default-upload-icon.png'} height="100%" width="100%" alt=""></img>
            </S.ContentsImg>
            <S.UploadText color={PALETTE.LIGHT_BLACK}>
              이미지를 여기에 드래그하거나, 클릭하여 업로드하세요.
            </S.UploadText>
          </S.DefaultContainer>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
