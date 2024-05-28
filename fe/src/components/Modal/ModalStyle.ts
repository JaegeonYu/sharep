import { PALETTE } from '@/styles';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInSlideUp = keyframes`
from {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const StyledText = styled.span<{ color?: string; fontSize?: number; fontWeight?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : '400')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ModalWrapper = styled.div`
  width: 50%;
  height: fit-content;
  max-height: 90%;
  max-width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
  background-color: white;
  border-radius: 12px;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.2s ease-out forwards;
`;

export const ModalContent = styled.div`
  /* overflow-y: auto; */
  display: flex;
  width: 100%;
  height: auto;
  max-height: 90vh;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: ${PALETTE.MAIN_WHITE};
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04);
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  position: relative;
`;

export const ModalHeaderContent = styled.div`
  display: flex;
  padding: 24px 24px 0px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const ModalTitle = styled(StyledText)`
  color: ${PALETTE.MAIN_BLACK};
  font-size: 18px;
  font-weight: 700;
`;

export const ModalSubTitle = styled(StyledText)`
  color: ${PALETTE.LIGHT_BLACK};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: 400;
`;

export const CloseButton = styled.button`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  display: flex;
  padding: 20px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  overflow-y: auto;
`;
export const ModalFooter = styled.div`
  display: flex;
  padding: 24px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

export const BtnWrapper = styled.div<{ $isValid: boolean }>`
  width: 100%;
  cursor: ${({ $isValid }) => ($isValid ? 'pointer' : 'not-allowed')};
  button {
    ${({ $isValid }) =>
      !$isValid &&
      `background-color: #e7e7e7 ;
        color:${PALETTE.LIGHT_BLACK} ;
      `}
  }
`;
