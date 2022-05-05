import { createTheme } from '@mui/material/styles';

export const MuiThemeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
        main: '#90c1e0',
        contrastText: '#294154',
    },
    secondary: {
        main: '#f1aa2a',
        dark: '#EA8122',
    }
  },
  
});

export const MuiThemeDark = createTheme({
    palette: {
      mode: 'dark',
      primary: {
          main: '#13293d',
          contrastText: '#ffffff',
      },
      secondary: {
          main: '#EA8122',
      }
    },
    
  });
