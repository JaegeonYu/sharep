import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const CommitHistoryWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CommitList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-x: scroll;
`;
export const StyledText = styled.span<{ color?: string; fontSize?: number; fontWeight?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const Header = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 12px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0;
  border: 1px #e3e3e3 solid;
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

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const CommitAddBtn = styled.div``;

export const CommitDateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding: 0px 0px 15px;
`;

export const CommitIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${PALETTE.MAIN_WHITE};
  border-radius: 16px;
  padding: 8px;
  position: relative;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    height: 100%;
    width: 2px;
    z-index: -1;
    content: '';
    background-color: rgba(208, 215, 222, 0.7);
  }
`;

export const FilterType = styled.div`
  width: 100%;
  font-weight: 600;
  border-bottom: 1px solid ${PALETTE.LIGHT_BLACK};
  padding: 8px;
`;

export const HeaderTitle = styled.div`
  width: fit-content;
  display: flex;
  height: 100%;
`;

export const TitleText = styled(StyledText)`
  text-decoration: none;
  &:hover {
    background-color: ${PALETTE.LIGHT_COLOR};
  }
`;
