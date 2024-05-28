import { PModal, PortalModal, SideBar, TableBtn } from '@/components';
import Add from '@/components/Button/Add/Add';
import HistroyBtn from '@/components/Button/History/HistoryBtn';
import MainColorBtn from '@/components/Button/MainColorBtn/MainColorBtn';
import UserImg from '@/components/UserImg/UserImg';
import * as G from '@/styles';
export default function SungGu() {
  return (
    <>
      <div>
        {/* <SideBar></SideBar> */}
        {/* <SideBar></SideBar> */}
        <PModal></PModal>
        <PortalModal>
          <PModal></PModal>
        </PortalModal>
      </div>
      <div style={{ backgroundColor: `${G.PALETTE.MAIN_BACKGROUND}`, width: '100%' }}>
        <Add></Add>
        <HistroyBtn></HistroyBtn>
      </div>
    </>
  );
}
