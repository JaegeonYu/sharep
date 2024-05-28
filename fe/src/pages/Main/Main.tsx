import React, { useState } from 'react';
import * as S from './MainStyle';
import * as G from '@/styles';
import * as Comp from '@components';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BG from '@/assets/svgs/bgc.svg?react';

export default function Main() {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate('/login');
  };

  return (
    <>
      {/* <S.Header>Header TEMP</S.Header> */}
      <Comp.Header></Comp.Header>

      <S.RootLayout>
        <S.MainWrapper>
          <S.BgImg>
            <BG></BG>
          </S.BgImg>
          <S.SloganWrapper>
            <S.Slogan>
              <S.SymbolImg style={{ height: '16vh' }}>
                <img src={'/symbol.png'} height="100%" alt="위원회들"></img>
              </S.SymbolImg>

              <Comp.Slogan></Comp.Slogan>

              {/* <p>여기에 어떤 글을 쓸까요 ?</p> */}
            </S.Slogan>
            {/* <motion.div
              initial={{ opacity: 0, y: -90 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7 },
              }}
            > */}
            <Comp.Carousel>
              {/* 캐러셀 컴포넌트 시작 */}
              <S.MonitorScreen1 />
              <S.MonitorScreen2 />
              <S.MonitorScreen3 />
            </Comp.Carousel>{' '}
            {/* 캐러셀 컴포넌트 끝 */}
            {/* </motion.div> */}
          </S.SloganWrapper>

          <S.SubSlogan>
            <S.StyledText fontSize={20} fontWeight={700}>
              기능명세 작성과 API명세부터
            </S.StyledText>
            <S.StyledText fontSize={20} fontWeight={700}>
              화면설계, 인프라 담당자 또한 커밋을 남길 수 있고
            </S.StyledText>
            <S.StyledText fontSize={20} fontWeight={700}>
              완료된 기능은 알림으로 알려드려요
            </S.StyledText>
          </S.SubSlogan>
        </S.MainWrapper>
        <section>
          <S.ContentsWrapper>
            <motion.div
              initial={{ opacity: 0, y: -90 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7 },
              }}
              style={{ width: '100%' }}
            >
              <S.Contents>
                <S.ContentsImg>
                  <img src={'/work-status.png'} height="100%" alt="위원회들"></img>
                </S.ContentsImg>
                <S.StyledText fontSize={28} fontWeight={700}>
                  팀원들의 작업을 확인하고
                </S.StyledText>
              </S.Contents>
            </motion.div>
            <S.ContentsGap></S.ContentsGap>
            <motion.div
              initial={{ opacity: 0, y: 90 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5 },
              }}
              style={{ width: '100%' }}
            >
              <S.Contents>
                <S.StyledText fontSize={28} fontWeight={700}>
                  함께 명세서를 작성해보세요
                </S.StyledText>
                <S.ContentsImg>
                  <img src={'/manual.png'} height="100%" alt="위원회들" style={{ borderRadius: '10px' }}></img>
                </S.ContentsImg>
              </S.Contents>
            </motion.div>
            <S.ContentsGap></S.ContentsGap>
            <motion.div
              initial={{ opacity: 0, y: 90 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5 },
              }}
              style={{ width: '100%' }}
            >
              <S.Contents>
                <S.ContentsImg style={{ height: '40vh' }}>
                  <img src={'/alarm.png'} height="100%" alt="위원회들" style={{ borderRadius: '10px' }}></img>
                </S.ContentsImg>
                <S.StyledText fontSize={28} fontWeight={700}>
                  완료된 기능은
                  <br /> 알림으로 알려드려요
                </S.StyledText>
              </S.Contents>
            </motion.div>
            <S.ContentsGap></S.ContentsGap>
          </S.ContentsWrapper>
          <S.MainWrapper>
            <S.BottomContentsWrapper>
              <S.SymbolImg style={{ height: '16vh' }}>
                <img src={'/symbol.png'} height="100%" alt="위원회들"></img>
              </S.SymbolImg>
              <S.StyledText fontSize={28} fontWeight={700} color="whilte">
                지금 바로 시작 해보세요
              </S.StyledText>
              <S.ContentsGap></S.ContentsGap>
              <S.BottomButton onClick={loginClick}>시작하기</S.BottomButton>
            </S.BottomContentsWrapper>
          </S.MainWrapper>
        </section>
      </S.RootLayout>
    </>
  );
}
