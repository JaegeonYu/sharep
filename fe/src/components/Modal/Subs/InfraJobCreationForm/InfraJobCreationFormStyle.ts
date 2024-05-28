import { InputWithLabel } from '@/components';
import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const EditorWrapper = styled.div`
  width: 100%;
  display: flex;
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

export const StyledText = styled.div<{ color?: string; fontSize?: number; fontWeight?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NotiContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const NotiUser = styled.div`
  display: inline-flex;
  border-radius: 4px;
  background-color: ${PALETTE.MAIN_BACKGROUND};
  align-items: center;
  justify-content: flex-start;
  padding: 4px 8px;
  gap: 12px;
`;

export const DeleteBtn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3px;
  cursor: pointer;
`;

export const Img = styled.img<{ width: number; height: number; radius: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ radius }) => radius}px;
  box-shadow: 0px 0px 0px 1px rgba(31, 35, 40, 0.15);
`;

export const RoleBadgeList = styled.div`
  display: flex;
  gap: 4px;
`;

export const AddUserBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Dropdown = styled.div<{ $dropdownPosition: string }>`
  display: flex;
  position: absolute;
  top: -100%;
  ${({ $dropdownPosition }) => `${$dropdownPosition} : 150%;`}
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
  gap: 10px;
  z-index: 1;
  overflow-y: auto;
  max-height: 30vh;
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

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const UserProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${PALETTE.MAIN_BACKGROUND};
  border-radius: 45px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px 1px rgba(31, 35, 40, 0.15);
  }
`;
