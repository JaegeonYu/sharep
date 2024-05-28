import React, { useEffect, useRef, useState } from 'react';
import * as S from './GrassStyle';

const GitHubGrid = ({ data }: any) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;
      scrollContainer.scrollLeft = maxScrollLeft;
    }
  }, []);

  // 각 GridSquare의 툴팁 상태를 저장하는 배열
  const [tooltipContent, setTooltipContent] = useState<Array<string>>(Array(data.length).fill(''));

  return (
    <div
      ref={scrollContainerRef}
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        overflowX: 'auto',
        padding: '20px 20px',
      }}
    >
      {data.map((row: any[], rowIndex: number) => (
        <div key={rowIndex}>
          {row.map((isActive: any, colIndex: number) => (
            <S.GridSquare
              key={colIndex}
              $active={isActive.step}
              onMouseEnter={() => {
                if (isActive.step !== 0) {
                  setTooltipContent(prevState => {
                    const newState = [...prevState];
                    newState[rowIndex * row.length + colIndex] = isActive.count;
                    return newState;
                  });
                }
              }}
              onMouseLeave={() => {
                if (isActive.step !== 0) {
                  setTooltipContent(prevState => {
                    const newState = [...prevState];
                    newState[rowIndex * row.length + colIndex] = '';
                    return newState;
                  });
                }
              }}
            >
              {tooltipContent[rowIndex * row.length + colIndex] && (
                <S.Tooltip>{tooltipContent[rowIndex * row.length + colIndex]} 커밋</S.Tooltip>
              )}
            </S.GridSquare>
          ))}
        </div>
      ))}
    </div>
  );
};

const convertToGrid = (data: any[]) => {
  const rows = Math.ceil(data.length / 7);
  const grid: any[][] = [];

  for (let i = 0; i < rows; i++) {
    grid.push(data.slice(i * 7, (i + 1) * 7));
  }

  return grid;
};

export default function Grass({ grass }: any) {
  return <GitHubGrid data={convertToGrid(grass.jobs)} />;
}
