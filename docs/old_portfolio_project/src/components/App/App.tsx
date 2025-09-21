import React from 'react';
import './App.scss';
import Layout from '../../Layout';
import { UIProvider } from '../../providers/UIProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../../providers/ThemeProvider';

function App() {
  return (
    <UIProvider>
      <ThemeProvider>
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    </UIProvider>
  );
}

export default App;
