import styled from 'styled-components';
import * as G from '@/styles';

interface FontOption {
  $size: string;
  $weight: number | string;
}

export const SideBarWrapper = styled.div`
  width: 260px;
  height: 100vh;
  padding: 16px 16px;
  row-gap: 24px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const SideBarProfile = styled.div`
  column-gap: 14px;
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
`;

export const SideBarProfilePhoto = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: row;
  background-color: red;
`;

export const SideBarProfileName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SideBarNavList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const SideBarNavMain = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const SideBarMyProject = styled(SideBarNavMain)`
  row-gap: 10px;
`;

export const SideBarContents = styled.button`
  display: flex;
  flex-direction: row;
  padding: 12px 12px;
  column-gap: 10px;
  align-items: center;
  border-radius: 12px;
`;

export const ContentsImg = styled.div`
  display: flex;
  flex-direction: row;
  width: 32px;
  column-gap: 10px;
  align-items: center;
  border-radius: 12px;
`;

export const SideBarBtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  /* font-weight: ; */
`;
export const SideBarBtn = styled.button`
  display: flex;
  flex-direction: row;
  border: solid 1px ${G.PALETTE.MAIN_COLOR};
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${G.PALETTE.GRASS_1};
    color: white;
  }

  /* padding: 12px 12px; */
  /* column-gap: 10px; */
`;

export const SideBarTitle = styled.div`
  justify-content: space-between;
  border-bottom: solid 1px black;
  display: flex;
  flex-direction: row;
  padding: 12px 12px;
  column-gap: 10px;
  align-items: center;
  /* font-weight: bold; */
`;

export const SideBarFont = styled.div<FontOption>`
  font-size: ${({ $size }) => $size};
  font-weight: ${({ $weight }) => $weight};
`;

export const NotiDropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  position: relative;
  width: 100%;
`;

export const NotiDropdownContent = styled.div<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 1000;
  width: 60vh;
  min-height: 400px;
  max-height: 500px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  background: ${G.PALETTE.MAIN_WHITE};
  box-shadow: 2px 0px 16px 0px rgba(0, 0, 0, 0.16), -2px 0px 16px 0px rgba(0, 0, 0, 0),
    0px -2px 16px 0px rgba(0, 0, 0, 0), 0px 2px 16px 0px rgba(0, 0, 0, 0);
  overflow-y: auto;
`;

export const NotiUserInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const RoleBadgeList = styled.div`
  display: flex;
  gap: 4px;
`;

export const StyledText = styled.div<{ color?: string; fontSize?: number; fontWeight?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NotiDropdownHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 12px 20px;
`;

export const NotiItem = styled.div<{ $isRead: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-top: 1px solid #e3e3e3;
  cursor: ${({ $isRead }) => ($isRead ? `default` : `pointer`)};
  background-color: ${({ $isRead }) => ($isRead ? `${G.PALETTE.MAIN_BACKGROUND}` : `${G.PALETTE.MAIN_WHITE}`)};
`;

export const NotiIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const UnReadMark = styled.div`
  width: 4px;
  height: 4px;
  position: absolute;
  background-color: #e42a2a;
  border-radius: 5px;
  top: 50%;
  left: -30%;
`;

export const NotiMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const NotiMessageContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: auto;
  min-width: 50px;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${G.PALETTE.LIGHT_BLACK};
  color: ${G.PALETTE.MAIN_WHITE};
  text-align: left;
  border-radius: 4px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
  top: 125%;
  opacity: 0;
  transition: opacity 0.3s;

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const UnReadMessage = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e42a2a;
  border-radius: 25%;
  color: ${G.PALETTE.MAIN_WHITE};
  padding: 2px 4px;
  font-size: 12px;
`;
