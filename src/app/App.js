import { Routes, Route, Navigate } from 'react-router';
import { Homepage } from '../features/Homepage/Homepage';
import { Dashboard } from '../features/Dashboard/Dashboard';
import './App.scss';
import { DarkMode } from '../features/DarkMode/DarkMode';
import useLocalStorage from 'use-local-storage';
import { ThemeProvider } from '@emotion/react';
import {
  MuiThemeLight,
  MuiThemeDark,
} from '../features/Common/MUITheme/muiTheme';
import { getStorage } from '../utils/helperLocalStorage';
import { PrivateRoute } from '../features/PrivateRoute/PrivateRoute';
import { useEffect } from 'react';
import { NotFound } from '../features/NotFound/NotFound';

// Detect the prefer color scheme from the user, and add it automatically to the local storage.
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const actualToken = getStorage('token');
const App = () => {
  // Get the theme based on the prefer color scheme of the user, and get it to the local storage
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );
  // Get the token at the first launch, and update if changing it
  const [token, setToken] = useLocalStorage('token', actualToken);

  /**
   * Allow to switch a theme
   */
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
            exact
            path='/'
            element={
              token ? <Navigate to='/dashboard' replace /> : <Homepage />
            }
          />
          <Route
            path='/dashboard'
            element={
              <PrivateRoute token={token}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ThemeProvider>
      <DarkMode switchTheme={switchTheme} />
      <button
        onClick={() => setToken(undefined)}
        type='button'
        className='logout w-5 h-5 bg-red-600 fixed bottom-5 left-5'
      ></button>
    </div>
  );
};
export default App;
