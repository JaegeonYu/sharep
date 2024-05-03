import styled from 'styled-components';
import * as G from '@styles';

export const GridSquare = styled.div<{
  $active?: number;
}>`
  width: 12px;
  height: 12px;
  margin: 2px;
  background-color: ${props => `G.PALETTE.GRASS_${props.$active}`};
  border: solid 1px ${G.PALETTE.GRASS_1};
`;

// {
//     "year": 2024,
//     "roleCount": 4,
//     "roles": [
//     {
//     "step": 0,
//     "count": 0
//     },
//     }
