import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { Homepage } from '../features/Homepage/Homepage';
import { Dashboard } from '../features/Dashboard/Dashboard';
import './App.scss';
import { DarkMode } from '../features/DarkMode/DarkMode';
// import { Counter } from '../features/counter/Counter';
import useLocalStorage from 'use-local-storage';
import { ThemeProvider } from '@emotion/react';
import {
  MuiThemeLight,
  MuiThemeDark,
} from '../features/Common/MUITheme/muiTheme';

import { useSelector, useDispatch } from 'react-redux';
import { addTokenBegin } from '../features/auth/authSlice';
import { getStorage } from '../utils/helperLocalStorage';
import { logOut } from '../features/auth/authThunk';
// Detect the prefer color scheme from the user, and add it automatically to the local storage.

const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const App = () => {
  const dispatch = useDispatch();
  if (getStorage('token')) {
    dispatch(addTokenBegin());
  }
  const { token, loading } = useSelector((state) => state.auth);
  // Allow automatically the theme value based on the prefer color scheme from the user.
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  const muiTheme = theme === 'light' ? MuiThemeLight : MuiThemeDark;
  return (
    <div className='App' data-theme={theme}>
      <ThemeProvider theme={muiTheme}>
        <Routes>
          <Route
            path='/'
            element={token ? <Navigate to='/dashboard' /> : <Homepage />}
          />
          <Route
            path='/dashboard'
            element={token ? <Dashboard /> : <Navigate to='/' />}
          />
        </Routes>
      </ThemeProvider>
      <DarkMode switchTheme={switchTheme} />
      <button
        onClick={logOut()}
        type='button'
        className='logout w-5 h-5 bg-red-600 fixed bottom-5 left-5'
      ></button>
    </div>
  );
};
export default App;
