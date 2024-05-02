import styled from 'styled-components';
import * as G from '@styles';

export const GridSquare = styled.div<{
  $active?: boolean;
}>`
  width: 12px;
  height: 12px;
  margin: 2px;
  background-color: ${props => (props.$active ? `${G.PALETTE.GRASS_1}` : 'white')};
  border: solid 1px ${G.PALETTE.GRASS_1};
`;
