import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import '../styles/global.css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;

