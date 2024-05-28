import React, { useEffect, useRef, useState } from 'react';
import * as Comp from '@components';
import * as Icon from '@assets';
import * as L from '@layouts';

export default function SungJe() {
  return (
    <L.SideBarLayout>
      <div style={{ width: 400, height: 400 }}></div>
    </L.SideBarLayout>
  );
}

// ### API 명세서 조회
// - ???: 분류 (대분류)
// - state: 상태 (진행 상태)    ---> HIGH, MEDIUM, LOW
// - method: 메소드            ---> GET, POST, PUT, PATCH, DELETE
// - ???: API 경로
// - ???: 설명 (상세 설명)
// - ???: RequestBody
// - ???: ResponseBody
// - ???: BE 구현 (구현 상태)
// - ???: FE 구현 (구현 상태)
// - assignees: 담당자 (N명)   ---> API RESPONSE LIST

// ### 기능 명세서
// - ???: 요구사항명 (대분류)
// - ???: 기능명
// - priority: 우선 순위      ---> HIGH, MEDIUM, LOW
// - ???: 사용할 화면
// - state: 진행상태          ---> YET, NOW, DONE
// - assignees: 담당자 (N명)
// - ???: 시작 날짜
// - ???: 종료 날짜
