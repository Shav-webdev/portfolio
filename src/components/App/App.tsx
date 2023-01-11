import React, { useState } from 'react';
import './App.scss';
import Layout from '../../Layout';
import { ThemeContext } from 'contexts/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Router>
          <Layout />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
