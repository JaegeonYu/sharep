import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as S from '../../pages/Main/MainStyle';
import * as CS from './CarouselStyle';

const Carousel = ({ children }: { children: React.ReactNodeArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null); // setInterval의 참조 저장

  useEffect(() => {
    // 컴포넌트가 마운트될 때 setInterval 시작
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % 3);
    }, 2300);

    // 컴포넌트가 언마운트될 때 clearInterval
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (idx: number) => {
    // 클릭할 때마다 clearInterval
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentIndex(idx);
  };

  return (
    <S.MonitorWrapper>
      <S.Monitor id="monitor">
        <S.CameraWrapper>
          {[0, 1, 2].map(index => (
            <CS.Dot key={index} onClick={() => handleDotClick(index)} isSelected={currentIndex === index}></CS.Dot>
          ))}
        </S.CameraWrapper>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%' }}
        >
          {children[currentIndex]}
        </motion.div>
      </S.Monitor>
    </S.MonitorWrapper>
  );
};

export default Carousel;
