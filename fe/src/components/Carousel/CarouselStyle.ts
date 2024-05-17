import styled from 'styled-components';

export const Dot = styled.div<{
  isSelected?: boolean;
}>`
  background-color: ${({ isSelected }) => (isSelected ? `#2dc937` : '#707070')};

  border-radius: 4px;
  display: inline-block;
  height: 8px;
  width: 8px;
  margin: 10px;
  cursor: pointer;
`;
