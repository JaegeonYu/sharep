import * as S from './UserImgStyle';
import * as T from '@/types';

/**
 *
 * @param size
 * sm , md , lg  3-types
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
