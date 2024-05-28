import styled from 'styled-components';
import * as G from '@/styles';

export const Header = styled.div`
  height: 50px;
  background-color: gray;
`;

export const RootLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0px 200px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100%; */
  /* background-color: blue; */
  margin-left: -200px;
  margin-right: -200px;
  position: relative;
`;

export const BgImg = styled.div`
  /* margin-left: -200px; */
  /* margin-right: -200px; */
  width: 100%;
  position: absolute;
`;

export const SloganWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 110vh;
  position: relative;
  /* justify-content: center; */
  /* align-items: center; */
  /* background-color: ${G.PALETTE.GRASS_1}; */
  /* background: linear-gradient(to bottom, ${G.PALETTE.MAIN_COLOR}, ${G.PALETTE.MAIN_WHITE}); */
`;

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4%;
  justify-content: center;
  align-items: center;
`;

export const SubSlogan = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 190px;
  justify-content: center;
  align-items: center;
  background-color: ${G.PALETTE.NO_GRASS};
  /* font-size: 20px;
  font-weight: 600; */
  padding: 15vh 0px;
  z-index: 2;
`;

export const MonitorWrapper = styled.div`
  display: flex;
  width: 100%;

  height: 100%;
  justify-content: center;
  margin-top: 10vh;
  /* position: relative; */
`;
export const Monitor = styled.div`
  display: flex;

  width: 80%;
  min-width: 1200px;
  /* height: 65%; */
  background-color: #000;
  border: 4px solid #707070;
  bottom: 2px;
  border-bottom: 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  box-shadow: 0 0 40px 2px rgba(28, 31, 47, 0.1);
  font-size: 1.5rem;
  padding: 0px 20px;
  padding-top: 20px;
  /* margin: 0px 15px; */
  position: relative;
`;

export const MonitorScreen1 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-bottom: 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 0px 20px;
  margin: 10px 0px;
  background: no-repeat top/100% url('/dashboard.png');
`;
export const MonitorScreen2 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-bottom: 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 0px 20px;
  margin: 10px 0px;
  background: no-repeat top/100% url('/landing.png');
`;
export const MonitorScreen3 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-bottom: 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 0px 20px;
  margin: 10px 0px;
  background: no-repeat top/100% url('/history.png');
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* padding: 20vh 0px; */
  /* margin: 20vh 0px; */
`;

export const ContentsGap = styled.div`
  display: flex;
  flex-direction: row;
  height: 40vh;
`;

export const SymbolImg = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  /* background-color: greenyellow; */
`;

export const ContentsImg = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: 30vh;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 1px rgba(31, 35, 40, 0.15);
  z-index: 1;
  /* background-color: greenyellow; */
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  /* background: no-repeat top/80% url('/work-status.png'); */
  /* background-color: greenyellow; */
`;

export const StyledText = styled.div<{ color?: string; fontSize?: number; fontWeight?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : '400')};
  white-space: nowrap;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
`;

export const BottomContentsWrapper = styled(SubSlogan)`
  /* background: no-repeat top/80% url('/work-status.png'); */
  /* background-color: ${G.PALETTE.GRASS_2}; */
  background: linear-gradient(to right, ${G.PALETTE.MAIN_COLOR}, ${G.PALETTE.GRASS_1});
  height: 85vh;
  justify-content: flex-start;
  padding: 10%;
  row-gap: 24px;
`;

export const BottomButton = styled.button`
  background-color: ${G.PALETTE.MAIN_WHITE};
  height: fit-content;
  width: fit-content;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  align-items: 'center';
  padding: 12px 12px;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 1px rgba(31, 35, 40, 0.15);
  /* row-gap: 24px; */
`;

export const CameraWrapper = styled.div`
  background-color: #000;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  left: 50%;
  line-height: 26px;
  margin-left: -90px;
  position: absolute;
  text-align: center;
  width: 180px;
  z-index: 1;
`;
