import { createTheme } from '@mui/material/styles';

export const MuiThemeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFFFF',
      contrastText: '#294154',
    },
    secondary: {
      main: '#EA8122',
      dark: '#f1aa2a',
    },
  },
  typography: {
    fontFamily: [
      'easterFont',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
});

export const MuiThemeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1a2028',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#EA8122',
    },
  },
  typography: {
    fontFamily: [
      'easterFont',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
});
