import React from 'react';

export default function PModal() {
  return (
    <div className="MyModal">
      <div className="Mask"></div>
      <div className="Modal-body">
        <div className="content">
          <h3>모달 타이틀</h3>
          <p>모달 텍스트 입니다.</p>
          <button>닫기</button>
        </div>
      </div>
    </div>
  );
}
