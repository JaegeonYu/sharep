import { SideBar } from '@/components';
import UserImg from '@/components/UserImg/UserImg';
import * as G from '@/styles';
export default function SungGu() {
  return (
    <>
      <div>
        <SideBar></SideBar>
        {/* <SideBar></SideBar> */}
      </div>
      <div style={{ backgroundColor: `${G.PALETTE.MAIN_BACKGROUND}`, width: '100%' }}>fgf</div>
    </>
  );
}
