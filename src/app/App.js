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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleToken } from '../features/auth/authSlice';
import ProfilePage from '../features/ProfilePage/ProfilePage';
import MenuIcon from '@mui/icons-material/Menu';
import FAQ from '../features/FAQ/Faq';
import ContactPage from '../features/ContactPage/ContactPage';
import MiniDrawer from '../features/Dashboard/miniDrawer';
// Detect the prefer color scheme from the user, and add it automatically to the local storage.
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const App = () => {
  const dispatch = useDispatch();
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
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const muiTheme = theme === 'light' ? MuiThemeLight : MuiThemeDark;
  return (
    <div className='App' data-theme={theme}>
      <ThemeProvider theme={muiTheme}>
        {tokenState && (
          <MiniDrawer
            handleToggleOpen={handleToggleOpen}
            setTheme={setTheme}
            theme={theme}
            setOpen={setOpen}
            open={open}
          />
        )}
        <MenuIcon
          className='fixed left-5 top-5'
          onClick={() => handleToggleOpen()}
        />
        <Routes>
          <Route
            path='/'
            element={
              tokenState ? <Navigate to='/dashboard' replace /> : <Homepage />
            }
          />
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
          <Route path='/faq' theme={muiTheme} element={<FAQ />} />
          <Route path='/contact' theme={muiTheme} element={<ContactPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
export default App;
