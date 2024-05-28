import styled from 'styled-components';

export const Wrapper = styled.div<{ $bgColor: string; $fontColor: string }>`
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  height: 24px;
  padding: 4px 8px;
  border-radius: 54px;
  font-size: 12px;
  color: ${({ $fontColor }) => $fontColor};
  background-color: ${({ $bgColor }) => $bgColor};
`;

export const Dot = styled.div<{ $bgColor: string }>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${({ $bgColor }) => $bgColor};
`;
