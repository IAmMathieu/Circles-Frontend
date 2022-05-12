import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

function MiniDrawerList({ name, url, open, img, icon, click }) {
  const IconCustom = icon;
  const [openMenu, setOpenMenu] = useState(true);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <ListItem key={name} disablePadding sx={{ display: 'block' }}>
      <NavLink
        to={url}
        className={({ isActive }) => (isActive ? 'nav-active' : 'nav-inactive')}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={handleClick}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {img ? (
              <img
                alt={name}
                className='w-10 h-10 rounded-full MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root'
                src={img}
              ></img>
            ) : icon ? (
              <i
                class={`${icon} MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root`}
              ></i>
            ) : (
              ''
            )}
          </ListItemIcon>
          <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary='Starred' />
            </ListItemButton>
          </List>
        </Collapse>
      </NavLink>
    </ListItem>
  );
}

export default MiniDrawerList;
