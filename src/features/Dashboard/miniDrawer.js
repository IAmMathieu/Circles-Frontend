import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDispatch, useSelector } from 'react-redux';
import { removeStorage } from '../../utils/helperLocalStorage';
import { handleToken } from '../auth/authSlice';
import { useNavigate } from 'react-router';
import { useGetUserDashBoardQuery } from './DashboardApi';
import MiniDrawerList from './MiniDrawerList';
import MiniDrawerListCircle from './MiniDrawerListCircle';
import { Divider } from '@mui/material';
import './miniDrawer.scss';
import MiniDrawerDarkMode from './MiniDrawerDarkMode';
import { useState } from 'react';
const drawerWidth = 240;
const userPicture =
  'https://ca.slack-edge.com/T02MBC4J9K5-U02M8CJUVJR-2df2ffa3c507-512';
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer({
  theme,
  setTheme,
  setOpen,
  open,
  handleToggleOpen,
}) {
  const disconnect = () => {
    dispatch(
      handleToken({
        token: '',
        user_id: '',
      })
    );
    removeStorage('token');
    removeStorage('user_id');
  };
  const { surname, logged, token, user_id } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const theme = useTheme();

  const { data: circlesData } = useGetUserDashBoardQuery({
    token,
    user_id,
  });
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar position='fixed' open={open}> */}
      {/* <IconButton
        color='inherit'
        aria-label='open drawer'
        onClick={handleDrawerOpen}
        edge='start'
        sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton> */}
      {/* </AppBar> */}
      <Drawer
        className={`Drawer__ui--custom ${open && 'Drawer__ui--open'}`}
        variant='permanent'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleToggleOpen}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <List>
          <MiniDrawerList
            name='Mon compte'
            img={userPicture}
            url='/profil'
            open={open}
          />

          <MiniDrawerList
            name='Dashboard'
            icon={'fa-solid fa-table-columns'}
            url='/dashboard'
            open={open}
          />
        </List>
        <Divider />
        {circlesData?.map((circle) => (
          <MiniDrawerList
            name={circle.name}
            icon={circle.img_url}
            url={`/circle/${circle.circle_id}`}
            open={open}
          />
        ))}
        <Divider />
        <List>
          <MiniDrawerList
            name='FAQ'
            icon={'fa-solid fa-circle-question'}
            url='/faq'
            open={open}
          />
          <MiniDrawerList
            name='Contact'
            icon={'fa-solid fa-comments'}
            url='/contact'
            open={open}
          />
          <Divider />
          <MiniDrawerDarkMode setTheme={setTheme} theme={theme} open={open} />
          <Divider />
          <MiniDrawerList
            name='Se déconnecter'
            icon={'fa-solid fa-arrow-right-from-bracket'}
            url='/'
            open={open}
            click={disconnect}
          />
        </List>
      </Drawer>
    </Box>
  );
}
