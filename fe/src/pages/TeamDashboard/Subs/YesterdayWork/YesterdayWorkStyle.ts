import styled from 'styled-components';

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
