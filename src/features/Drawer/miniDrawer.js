import { useDispatch, useSelector } from 'react-redux';
import { styled, makeStyles } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { removeStorage } from '../../utils/helperLocalStorage';
import { handleToken } from '../auth/authSlice';
import { useNavigate } from 'react-router';
import { useGetUserDashBoardQuery } from '../Dashboard/DashboardApi';
import MiniDrawerList from './MiniDrawerList';
import logo from './../../logo.svg';
import {
  Avatar,
  Collapse,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import './miniDrawer.scss';
import MiniDrawerDarkMode from './MiniDrawerDarkMode';
import { useGetProfilUserQuery } from '../ProfilePage/ProfilApi';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

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

  const [openCircleSubMenu, setOpenCircleSubMenu] = useState(false);
  const handleClickOnCircleSubMenu = () => {
    setOpenCircleSubMenu(!openCircleSubMenu);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  const { surname, logged, token, user_id, portrait_url } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const theme = useTheme();

  const { data: circlesData } = useGetUserDashBoardQuery({
    token,
    user_id,
  });

  const { data: userData } = useGetProfilUserQuery({ token, user_id });

  return (
    <Box className='test' sx={{ display: 'flex' }}>
      <CssBaseline />
      <IconButton
        className='z-10'
        sx={{ position: 'fixed', left: '1rem', top: '1rem' }}
        onClick={handleToggleOpen}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        className={`Drawer__ui--custom ${
          open && 'Drawer__ui--open'
        } bg-buttonbg`}
        variant='permanent'
        open={open}
        onClose={closeDrawer}
      >
        <DrawerHeader>
          <IconButton onClick={handleToggleOpen}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <List>
          <MiniDrawerList
            name='Mon compte'
            img_url={userData?.img_url}
            url='/profil'
            open={open}
            handleToggleOpen={closeDrawer}
          />

          <MiniDrawerList
            name='Dashboard'
            icon={'fa-solid fa-table-columns'}
            url='/dashboard'
            open={open}
            handleToggleOpen={closeDrawer}
          />
        </List>
        <Divider variant='middle' />
        <List>
          <ListItemButton onClick={handleClickOnCircleSubMenu}>
            <ListItemIcon>
              <Avatar src={logo} />
            </ListItemIcon>
            <ListItemText primary='Mes cercles' />
            {openCircleSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCircleSubMenu} timeout='auto'>
            {circlesData?.map((circle) => (
              <MiniDrawerList
                key={circle.circle_id}
                name={circle.name}
                desc={circle.description}
                img_url={circle.img_url}
                circle_id={circle.circle_id}
                open={open}
                handleToggleOpen={closeDrawer}
              />
            ))}
          </Collapse>
        </List>
        <Divider variant='middle' />
        <List className='mt-auto'>
          <MiniDrawerList
            name='FAQ'
            icon={'fa-solid fa-circle-question'}
            url='/faq'
            open={open}
            handleToggleOpen={closeDrawer}
          />
          <MiniDrawerList
            name='Contact'
            icon={'fa-solid fa-comments'}
            url='/contact'
            open={open}
            handleToggleOpen={closeDrawer}
          />
          <Divider variant='middle' />
          <MiniDrawerDarkMode setTheme={setTheme} theme={theme} open={open} />
          <Divider variant='middle' />
          <MiniDrawerList
            name='Se déconnecter'
            icon={'fa-solid fa-arrow-right-from-bracket'}
            url='/'
            open={open}
            handleToggleOpen={closeDrawer}
            click={disconnect}
          />
          <ListItemButton disabled>
            <ListItemIcon />
            <ListItemText
              disableTypography
              primary='©Circle - 2022'
              sx={{ fontSize: '12px' }}
            />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
