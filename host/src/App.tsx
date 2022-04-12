import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Footer } from '@managent/shared';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import ButtonPage from './pages/ButtonPage';

const Content = styled.div`
  padding: 10px;
  height: 300px;
`;

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <Header text="Host with shared libraries" />
      <NavBar />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buttons" element={<ButtonPage />} />
          <Route path="/heading" element={<h1>heading</h1>} />
        </Routes>
      </Content>
      <Footer />
    </React.Suspense>
  );
};

export default App;
