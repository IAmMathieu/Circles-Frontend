import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LightModeIcon from '@mui/icons-material/LightMode';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
function MiniDrawerDarkMode({ open, setTheme, theme }) {
  return (
    <ListItem key={'Darmode'} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </ListItemIcon>
        <ListItemText
          primary={theme === 'dark' ? 'Darkmode' : 'Lightmode'}
          sx={{ opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default MiniDrawerDarkMode;
