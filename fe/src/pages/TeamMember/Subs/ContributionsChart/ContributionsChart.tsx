import React, { useMemo } from 'react';
import * as S from './ContributionsChartStyle';
import * as T from '@types';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
  CategoryScale,
  LineElement,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { PALETTE } from '@/styles';
import dayjs from 'dayjs';

ChartJS.register(Title, Tooltip, Filler, Legend, PointElement, LinearScale, CategoryScale, LineElement);

export default function ContributionsChart({ dataList }: T.ContributionsChartProps) {
  const options = useMemo(() => {
    return {
      type: 'line',
      responsive: true,
      plugins: { title: { display: false }, legend: { display: false } },
      scales: {
        y: { ticks: { font: { size: 10, famliy: 'Pretendard' } } },
        x: { ticks: { font: { size: 10, famliy: 'Pretendard' } }, grid: { display: false } },
      },
      aspectRatio: 2 / 1,
    };
  }, []);

  const formatDate = (date: string) => {
    return dayjs(date).format('M월 D일');
  };

  return (
    <S.ChartWrapper>
      {dataList && (
        <Line
          data={{
            labels: Object.keys(dataList).map(date => formatDate(date)),
            datasets: [
              {
                data: Object.values(dataList),
                fill: 'start',
                backgroundColor: PALETTE.MAIN_COLOR,
                borderColor: PALETTE.MAIN_COLOR,
                pointRadius: 1,
              },
            ],
          }}
          options={options}
        />
      )}
    </S.ChartWrapper>
  );
}
