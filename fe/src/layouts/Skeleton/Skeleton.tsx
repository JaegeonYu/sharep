import { Header, SideBar } from '@/components';
import React from 'react';
import { Outlet } from 'react-router-dom';
import * as L from '@layouts';

export default function Skeleton() {
  return (
    <>
      <L.SideBarLayout>
        <Outlet />
      </L.SideBarLayout>
    </>
  );
}
