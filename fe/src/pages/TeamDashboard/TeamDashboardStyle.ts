import { PALETTE } from '@/styles';
import styled from 'styled-components';

export const Container = styled.section`
  & > .row-wrapper {
    display: flex;
    gap: 16px;
  }
`;

export const WhiteBoxWrapper = styled.article<{ $flex: string; $height: string }>`
  flex: ${({ $flex }) => $flex};
  height: ${({ $height }) => $height};
  padding: 16px;
  border-radius: 12px;
  background-color: white;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 30px;
  padding-bottom: 6px;

  span {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const RootScrollContainer = styled.div`
  width: 100%;
  height: calc(100% - (24px + 20px));
  overflow: auto;
  padding-top: 20px;
`;

export const YesterdayWorksScrollContainer = styled(RootScrollContainer)``;

export const YesterdayWork = styled.div`
  width: 100%;
  height: calc(56px + 10px + 14px);
  height: fit-content;
  margin-bottom: 24px;

  & > p {
    width: 100%;
    height: 14px;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: break-word;
    word-break: break-all;
    text-overflow: ellipsis;
    cursor: default;
  }
`;

export const CurrentWorksScrollContainer = styled(RootScrollContainer)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(263px, 1fr));
  /* grid-template-columns: repeat(2, calc((554px - 10px - 8px) / 2)); */
  grid-gap: 10px;
  z-index: 1;
`;

export const CurrentWork = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  padding: 8px 10px;
  background-color: ${PALETTE.MAIN_BACKGROUND};

  .issue {
    width: 100%;
    height: 124px;
    background-color: gray;
    border-radius: 12px;
  }
`;
