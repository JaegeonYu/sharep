import React, { useCallback } from 'react';
import * as S from './ApiManualTableStyle';
import * as T from '@types';
import * as Icon from '@assets';
import Row from './Subs/Row/Row';
import { MANUAL_CONSTANTS } from '@/constants';

export default function ApiManualTable({ dataList, readonly }: T.ApiManualTableProps) {
  const createIconUsingIconName = useCallback(({ idx }: { idx: number }) => {
    if (MANUAL_CONSTANTS.API[idx].iconName === 'main-title-icon') {
      return <Icon.MainTitle />;
    }
    if (MANUAL_CONSTANTS.API[idx].iconName === 'current-state-title') {
      return <Icon.CurrentStateTitle />;
    }
    if (MANUAL_CONSTANTS.API[idx].iconName === 'text-content-title') {
      return <Icon.TextContentTitle />;
    }
  }, []);

  return (
    <S.TableWrapper>
      <S.TableContainer>
        <S.TitleRowWrapper>
          {MANUAL_CONSTANTS.API.map((title, titleIdx) => (
            <S.Title $fixedWidth={MANUAL_CONSTANTS.API[titleIdx].fixedWidth} key={`title-${title.name}-${titleIdx}`}>
              {createIconUsingIconName({ idx: titleIdx })}
              <span>{title.name}</span>
            </S.Title>
          ))}
        </S.TitleRowWrapper>
        {dataList?.map((data, dataIdx) => {
          return (
            <Row idx={dataIdx} data={data as T.API.DetailApi} readonly={readonly} key={`api-table-row-${dataIdx}`} />
          );
        })}
      </S.TableContainer>
    </S.TableWrapper>
  );
}
