import styled from 'styled-components';
import * as G from '@/styles';
import { Pencil } from 'lucide-react'; // lucide에서 Pencil 아이콘 가져오기

interface FontOption {
  $size: string;
  $weight: number | string;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 260px;
  row-gap: 36px;
`;

export const HeaderWrapper = styled.div`
  /* width: 100; */
  display: flex;
  row-gap: 36px;
  column-gap: 4px;
  justify-content: space-between;
`;

export const ProfileWrapper = styled.div`
  /* width: 100; */
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
`;

export const ProfileTextWrapper = styled.div`
  /* width: 100; */
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const ProfileLogout = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  /* width: 100%; */
  justify-content: center;
  align-items: center;
`;

export const GrassWrapper = styled.div`
  width: 630px;
  height: 222px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 24px 24px;
`;

export const GrassTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GrassYearWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  column-gap: 16px;
  align-items: center;
`;

export const GrassHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const GrassStep = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1px;
`;

export const GrassYear = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 6px;
  align-items: center;
  color: ${G.PALETTE.MAIN_WHITE};
  background-color: ${G.PALETTE.MAIN_COLOR};
`;

export const Edit = styled.div`
  display: flex;
`;

export const Font = styled.div<FontOption>`
  display: flex;
  flex-direction: row;
  font-size: ${({ $size }) => $size};
  font-weight: ${({ $weight }) => $weight};
`;
