import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { Homepage } from '../features/Homepage/Homepage';
import { Dashboard } from '../features/Dashboard/Dashboard';
import './App.scss';
import { DarkMode } from '../features/DarkMode/DarkMode';
// import { Counter } from '../features/counter/Counter';
import useLocalStorage from 'use-local-storage';

// Detect the prefer color scheme from the user, and add it automatically to the local storage.
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const App = () => {
  
  // Allow automatically the theme value based on the prefer color scheme from the user.
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div className='App' data-theme={theme}>
      <h1>Coucou</h1>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='*' element={<Error404 />} /> */}
      </Routes>
      <DarkMode switchTheme={switchTheme} />
    </div>
  );
};
export default App;
