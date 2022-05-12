import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import SvgIcon from '@mui/material/SvgIcon';

function MiniDrawerList({ name, url, open, img, icon, click }) {
  const IconCustom = icon;

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
          onClick={() => {
            click && click();
          }}
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
                className={`${icon} MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root`}
              ></i>
            ) : (
              ''
            )}
          </ListItemIcon>
          <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </NavLink>
    </ListItem>
  );
}

export default MiniDrawerList;
