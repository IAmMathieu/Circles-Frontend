import { Routes, Route, Navigate } from 'react-router';
import { Homepage } from '../features/Homepage/Homepage';
import { Dashboard } from '../features/Dashboard/Dashboard';
import './App.scss';
import useLocalStorage from 'use-local-storage';
import { ThemeProvider } from '@emotion/react';
import { CirclePage } from './../features/CirclePage/CirclePage';


import {
  MuiThemeLight,
  MuiThemeDark,
} from '../features/Common/MUITheme/muiTheme';
import { getStorage } from '../utils/helperLocalStorage';
import { PrivateRoute } from '../features/PrivateRoute/PrivateRoute';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleToken } from '../features/auth/authSlice';
import ProfilePage from '../features/ProfilePage/ProfilePage';
import FAQ from '../features/FAQ/Faq';
import ContactPage from '../features/ContactPage/ContactPage';
import MiniDrawer from '../features/Drawer/miniDrawer';
import { CssBaseline } from '@mui/material';
import Circle from '../features/Circle/Circle';
import { textFieldColor } from '../features/Common/MUITheme/muiTheme';
import { Activate } from '../features/Activate/Activate';
import { CirclePage } from './../features/CirclePage/CirclePage';
import { ErrorPage } from './../features/404/404';
// Detect the prefer color scheme from the user, and add it automatically to the local storage.
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const App = () => {
  const dispatch = useDispatch();
  /**
   * Use for open or close the left menu
   */
  const [open, setOpen] = useState(false);
  const handleToggleOpen = () => {
    setOpen(!open);
  };
  // Recuperation du state token(auth slice)
  const { token: tokenState } = useSelector((state) => state.auth);
  /**
   * Get the token from the local storage
   */
  const [token, setToken] = useLocalStorage(
    'token',
    getStorage('token') !== null ? getStorage('token') : undefined
  );
  const [user_id, setUser_id] = useLocalStorage(
    'user_id',
    getStorage('user_id') !== null ? getStorage('user_id') : undefined
  );
  /**
   * Get the token, and add it to the store(if exist)
   */
  useEffect(() => {
    if (
      token !== null &&
      token !== undefined &&
      user_id !== null &&
      user_id !== undefined
    )
      dispatch(handleToken({ token, user_id }));
  }, []);

  // Get the theme based on the prefer color scheme of the user, and get it to the local storage
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );
  /**
   * Allow to switch a theme
   */
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const muiTheme = theme === 'light' ? MuiThemeLight : MuiThemeDark;
  return (
    <div className='App relative' data-theme={theme}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {tokenState && (
          <MiniDrawer
            handleToggleOpen={handleToggleOpen}
            setTheme={setTheme}
            theme={theme}
            setOpen={setOpen}
            open={open}
          />
        )}
        <Routes>
          <Route
            path='/'
            element={
              tokenState ? <Navigate to='/dashboard' replace /> : <Homepage />
            }
          />
          <Route path='/activate/:code_activate' element={<Activate />} />
          <Route
            path='/dashboard'
            element={
              <PrivateRoute token={tokenState}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path='/profil'
            element={
              <PrivateRoute token={tokenState}>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path='/circle/:circle_id'
            element={
              <PrivateRoute token={tokenState}>
                <Circle />
              </PrivateRoute>
            }
          />
          <Route path='/faq' theme={muiTheme} element={<FAQ />} />
          <Route path='/contact' theme={muiTheme} element={<ContactPage />} />
          <Route path='/404' theme={muiTheme} element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
export default App;
