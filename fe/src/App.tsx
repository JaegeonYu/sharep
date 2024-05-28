import React from 'react';
import { GlobalStyle } from './styles';
import { Route, Routes } from 'react-router-dom';
import * as Page from './pages';
import { useLoadUser } from './customhooks';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Skeleton } from './layouts';

dayjs.extend(relativeTime);

function App() {
  const user = useLoadUser();
  const mainElement = user ? <Page.Mypage /> : <Page.Main />;

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={mainElement} />
        <Route path="/login" element={<Page.Login />} />
        <Route path="/register" element={<Page.Register />} />
        <Route path="/projects" element={<Page.Mypage />} />
        {/* 나중에 사용자 이름으로 바꿔 */}
        <Route element={<Skeleton />}>
          <Route path="/projects/:projectId" element={<Page.TeamDashboard />} />
          <Route path="/projects/:projectId/members/:accountId" element={<Page.TeamMember />} />

          <Route path="/projects/:projectId/commit-history" element={<Page.CommitHistory />} />

          <Route path="/projects/:projectId/feature-manual" element={<Page.FeatureManual />} />
          <Route path="/projects/:projectId/api-manual" element={<Page.ApiManual />} />
          <Route path="/projects/:projectId/screen-manual" element={<Page.ScreenManual />} />
          <Route path="/projects/:projectId/screen-manual/:manualId" element={<Page.ScreenManualDetail />} />
          <Route path="/projects/:projectId/infra-manual" element={<Page.InfraManual />} />
          <Route path="/projects/:projectId/infra-manual/:manualId/:issueName" element={<Page.InfraManualDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
