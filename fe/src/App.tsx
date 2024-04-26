import React from 'react';
import { GlobalStyle } from './styles';
import { Route, Routes } from 'react-router-dom';
import * as Page from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<div>main</div>} />
        <Route path="/seo-jeong" element={<Page.SeoJeong />} />
        <Route path="/sung-gu" element={<Page.SungGu />} />
        <Route path="/sung-je" element={<Page.SungJe />} />
      </Routes>
    </>
  );
}

export default App;
