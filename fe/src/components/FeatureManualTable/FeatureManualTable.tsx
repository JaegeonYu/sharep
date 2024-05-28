import React, { useCallback } from 'react';
import * as S from './FeatureManualTableStyle';
import * as T from '@types';
import * as Icon from '@assets';
import * as API from '@apis';
import Row from './Subs/Row/Row';
import { MANUAL_CONSTANTS } from '@/constants';

export default function FeatureManualTable({ dataType, dataList, readonly }: T.FeatureManualTableProps) {
  const createIconUsingIconName = useCallback(({ idx }: { idx: number }) => {
    const iconName = MANUAL_CONSTANTS.FEATURE[idx].iconName;
    if (iconName === 'main-title-icon') return <Icon.MainTitle />;
    if (iconName === 'current-state-title') return <Icon.CurrentStateTitle />;
    if (iconName === 'text-content-title') return <Icon.TextContentTitle />;
  }, []);

  return (
    <S.TableContainer>
      <S.TitleRowWrapper>
        {MANUAL_CONSTANTS.FEATURE.map((title, titleIdx) => {
          if (dataType === 'SIMPLE' && title.key === 'connectedIssues') return;
          return (
            <S.Title
              $fixedWidth={MANUAL_CONSTANTS.FEATURE[titleIdx].fixedWidth}
              key={`title-${title.name}-${titleIdx}`}
            >
              {createIconUsingIconName({ idx: titleIdx })}
              <span>{title.name}</span>
            </S.Title>
          );
        })}
      </S.TitleRowWrapper>
      {dataList?.map((data, dataIdx) => (
        <Row dataType={dataType} idx={dataIdx} data={data} readonly={readonly} key={`feature-table-row-${dataIdx}`} />
      ))}
    </S.TableContainer>
  );
}
