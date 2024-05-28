import styled from 'styled-components';
import * as G from '@styles';

export const Tooltip = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px;
  border-radius: 4px;
  font-size: 8px;
  display: flex;
  flex-direction: row;
  width: 40px;
  z-index: 2;
  justify-content: center;
`;

export const GridSquare = styled.div<{
  $active?: number;
}>`
  width: 12px;
  height: 12px;
  margin: 1px;

  background-color: ${props => (props.$active === 0 ? `${G.PALETTE.NO_GRASS}` : G.PALETTE[`GRASS_${props.$active}`])};
  border: ${props => `solid 1px ${G.PALETTE[`GRASS_${props.$active}`]}`};
  border-radius: 2px;
  position: relative;
  /* z-index: 1; */
`;
