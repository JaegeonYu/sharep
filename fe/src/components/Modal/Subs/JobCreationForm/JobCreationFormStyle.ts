import { InputWithLabel } from '@/components';
import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const IssueTitle = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const StyledText = styled.span<{ color?: string; fontSize?: number; fontWeight?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UploadText = styled(StyledText)``;

export const UploadButton = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 2px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${UploadButton} {
    display: flex;
  }
`;

export const Preview = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const ContentsImg = styled.div`
  display: flex;
  flex-direction: row;
  width: 64px;
  margin-bottom: 10px;
  column-gap: 10px;
  align-items: center;
  border-radius: 12px;
`;

export const DefaultContainer = styled.div`
  border: 1px dashed ${PALETTE.LIGHT_BLACK};
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
`;

export const PreviewContainer = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  &:hover ${UploadButton} {
    display: flex;
  }
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const StyledInput = styled(InputWithLabel.Input)<{ $icon?: boolean }>`
  display: flex;
  padding: 10px 14px;
  padding-left: ${({ $icon }) => ($icon ? '30px' : '10px')};
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${PALETTE.NO_GRASS};
  background: ${PALETTE.MAIN_WHITE};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  font-size: 12px;
  width: 100%;
  &:focus {
    box-shadow: rgba(46, 184, 114, 0.05) 0px 6px 24px 0px, rgba(46, 184, 114, 0.08) 0px 0px 0px 3px;
  }
`;

export const IssueBadge = styled.div`
  display: flex;
  background-color: ${PALETTE.MAIN_COLOR};
  border-radius: 6px;
  padding: 2px 6px;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 100%;
  margin-top: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: ${PALETTE.MAIN_WHITE};
  box-shadow: 0px 30px 150px rgba(139, 139, 139, 0.1);
  border: 1px solid rgba(139, 139, 139, 0.1);
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  gap: 10px;
  z-index: 1;
  overflow-y: auto;
  max-height: 20vh;
`;

export const DropdowntItem = styled.div`
  align-self: stretch;
  padding: 8px;
  align-items: center;
  justify-content: center;
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const FilterType = styled.div`
  width: 100%;
  font-weight: 600;
  border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
  padding: 8px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  background-color: #f6f8fa;
  border: 1px #d0d7d3 solid;
  border-radius: 6px;
  height: 32px;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;

export const AccordionIconButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  width: 12px;
  height: 12px;
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
