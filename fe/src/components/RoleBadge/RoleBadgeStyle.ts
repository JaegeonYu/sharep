import styled from 'styled-components';

export const Wrapper = styled.div<{
  $bgColor: string;
  $fontColor: string;
  $selected: false | { state: boolean; onClick: (...args: any) => void };
}>`
  width: fit-content;
  height: fit-content;
  padding: 4px 6px;
  border-radius: 6px;
  font-size: 12px;
  color: ${({ $fontColor, $selected }) => ($selected && $selected.state ? 'white' : $fontColor)};
  background-color: ${({ $bgColor, $fontColor, $selected }) => ($selected && $selected.state ? $fontColor : $bgColor)};
  cursor: ${({ $selected }) => $selected && 'pointer'};
`;
