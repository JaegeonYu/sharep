import styled from 'styled-components';
import * as G from '@/styles';

/**
 *
 * size ex) lg, md , sm
 */
interface Options {
  $path: string | null | undefined;
  $size: string;
}

// export const ImgCircle = styled.div<Options>`
//   width: ${({ $size }) => ($size === 'lg' ? '126px' : $size === 'md' ? '72px' : '32px')};
//   height: ${({ $size }) => ($size === 'lg' ? '126px' : $size === 'md' ? '72px' : '32px')};
//   background: no-repeat center/100% url(${({ $path }) => $path});
//   border: solid 1px ${G.PALETTE.LIGHT_BLACK};

//   border-radius: 50%;
// `;
export const UserImgWrapper = styled.div`
  position: relative;
`;

export const ImgCircle = styled.div<Options>`
  width: ${({ $size }) => ($size === 'lg' ? '126px' : $size === 'md' ? '72px' : '32px')};
  height: ${({ $size }) => ($size === 'lg' ? '126px' : $size === 'md' ? '72px' : '32px')};

  background: ${({ $path }) =>
    $path ? `no-repeat center/100% url(${$path})` : `no-repeat center/100% url(/no-img.png)`};
  border: solid 1px ${G.PALETTE.LIGHT_BLACK};
  border-radius: 50%;
`;
