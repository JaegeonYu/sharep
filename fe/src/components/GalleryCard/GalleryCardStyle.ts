import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const BtnConatiner = styled.div`
  visibility: hidden;
  right: 0;
  position: absolute;
  background-color: ${PALETTE.MAIN_WHITE};
  margin: 4px 6px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
`;

export const EventBtn = styled.div`
  cursor: pointer;
  padding: 4px 6px;
`;

export const Card = styled.div<{ $isEdit: boolean }>`
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 3px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
  border: ${({ $isEdit }) => $isEdit && `1px solid ${PALETTE.MAIN_COLOR}`};
  cursor: ${({ $isEdit }) => ($isEdit ? `default` : `pointer`)};
  position: relative;
  &:hover ${BtnConatiner} {
    visibility: visible;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;
`;

export const CardText = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StyledText = styled.span<{
  color?: string;
  fontSize?: number;
  fontWeight?: number;
}>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  border-radius: 3px 3px 0px 0px;
`;

export const PreviewContent = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #e3e3e3;
  border-radius: 3px 3px 0px 0px;
  padding: 10px;
  white-space: nowrap;
`;

export const DefaultImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${PALETTE.MAIN_BACKGROUND};
`;

export const CardInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  color: ${PALETTE.SUB_BLACK};
  font-weight: 700;
`;
