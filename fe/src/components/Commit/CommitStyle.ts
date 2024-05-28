import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const CommitWrapper = styled.div`
  width: 100%;
  background: ${PALETTE.MAIN_WHITE};
  border-radius: 6px;
  border: 1px solid rgba(208, 215, 222, 0.7);
`;

export const CommitInfo = styled.div`
  width: 100%;
  height: 84px;
  padding: 24px 16px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
`;

export const AccordionIconButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  width: 24px;
  height: 24px;
  &:focus {
    outline: none;
  }
`;

export const AccordionIcon = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const CommitContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 10px;
  overflow: hidden;
`;

export const CommitMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CommitUserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const Img = styled.img<{ width?: number; height?: number; radius?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  border-radius: ${({ radius }) => radius}px;
  box-shadow: 0px 0px 0px 1px rgba(31, 35, 40, 0.15);
  object-fit: ${({ width, height }) => (width && height ? 'cover' : 'contain')};
`;

export const RoleBadgeList = styled.div`
  display: flex;
  gap: 4px;
`;

export const CommitText = styled.div<{ color?: string; fontSize?: number; fontWeight?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : '400')};
`;

export const StyledText = styled(CommitText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CommitImageDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 64px;
`;

export const CommitDetailContainer = styled.div``;

export const CommitContentDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 64px;
  gap: 10px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0;
  border: 1px #e3e3e3 solid;
`;
