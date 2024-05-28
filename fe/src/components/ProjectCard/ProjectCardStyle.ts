import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding: 24px 24px;
  row-gap: 36px;
  border-radius: 3px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
  cursor: pointer;
`;

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  position: relative;
`;

export const AddWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  justify-content: center;
  align-items: center;
`;

export const Tooltip = styled.div`
  position: absolute;
  background-color: ${PALETTE.LIGHT_BLACK};
  color: white;
  padding: 8px;
  border-radius: 4px;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
`;

// 호버 시에 툴팁을 보여주도록 설정
export const UserWrapper = styled.div`
  position: relative;

  &:hover ${Tooltip} {
    opacity: 1;
  }
`;

export const StyledText = styled.span<{
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  $add?: boolean;
}>`
  color: ${props => props.color};
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '14px')};
  font-weight: ${props => (props.fontWeight ? `${props.fontWeight}` : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  visibility: ${props => (props.$add ? 'hidden' : 'visible')};
`;

export const InvitationBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  cursor: pointer;
  svg {
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
`;
