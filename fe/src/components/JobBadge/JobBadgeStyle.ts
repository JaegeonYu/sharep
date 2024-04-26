import styled from 'styled-components';

export const Wrapper = styled.div<{ bgColor: string; fontColor: string }>`
  width: fit-content;
  height: fit-content;
  padding: 4px 6px;
  border-radius: 6px;
  font-size: 12px;
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ bgColor }) => bgColor};
`;
