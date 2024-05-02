import React from 'react';
import * as S from './GanttChartStyle';
import dayjs from 'dayjs';

import 'dayjs/locale/ko';

dayjs.locale('ko'); // global로 한국어 locale 사용

export default function GantChart() {
  const todayKor = dayjs('2023-11-02');
  console.log(todayKor.format('ddd')); // '목요일'
  const todayEng = dayjs('2023-11-02').locale('en');
  // todayEng 인스턴스에서만 영어 locale사용

  return <div style={{ width: '3000px' }}></div>;
}
