import BaseLabelWithInput from '@/components/InputWithLabel/InputWithLabel';
import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const Icon = styled.div<{ $position?: string; $fillColor?: string; $strokeColor?: string }>`
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  position: ${({ $position }) => ($position ? $position : 'static')};
  left: 10px;
  & > svg {
    fill: ${({ $fillColor }) => ($fillColor ? $fillColor : 'none')};
    stroke: ${({ $strokeColor }) => ($strokeColor ? $strokeColor : 'none')};
  }
`;

export const StyledText = styled.span<{ color?: string; fontSize?: number; fontWeight?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledLabel = styled(StyledText)`
  display: flex;
  gap: 12px;
  font-weight: 500;
`;

export const SecretKeyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled(BaseLabelWithInput.Input)<{ $icon?: boolean }>`
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

export const UrlInput = styled.input`
  border: 0;
  display: flex;
  padding: 10px 14px;
  padding-left: 10px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${PALETTE.NO_GRASS};
  background: ${PALETTE.MAIN_WHITE};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  font-size: 12px;
  width: 100%;
  &:disabled {
    background-color: ${PALETTE.MAIN_BACKGROUND};
  }
`;
