import * as S from './UserImgStyle';
import * as T from '@/types';

/**
 *
 * @param size
 * sm , md , lg  3-types 126x126 72x72 32x32
 * @param path
 * Img URL PLZ
 *
 */
export default function UserImg({ size, path }: T.UserImgProps) {
  return (
    <>
      <S.ImgCircle $size={size} $path={path}></S.ImgCircle>
    </>
  );
}
