import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCircle } from '../Circle/CircleSlice';

function MiniDrawerList({
  name,
  desc,
  circle_id,
  url,
  open,
  img_url,
  icon,
  click,
  handleToggleOpen,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirect = (event) => {
    event.preventDefault();
    if (url) {
      navigate(url);
    } else {
      navigate('/circle/' + circle_id);
      dispatch(changeCircle({ circle_id, name, desc, img_url }));
    }
  };

  return (
    <ListItem
      key={name}
      disablePadding
      sx={{ display: 'block' }}
      onClick={redirect}
    >
      <Tooltip
        title={<Typography fontSize='1rem'>{name}</Typography>}
        placement='right'
      >
        <ListItemButton
        aria-label='List of circles'
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => {
            handleToggleOpen();
            click && click();
          }}
        >
          <ListItemIcon
          alt='Circles icon'
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {img_url ? (
              <Avatar
                alt={name}
                className='w-6 h-6 rounded-full MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root'
                src={img_url}
              />
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
        {/* </NavLink> */}
      </Tooltip>
    </ListItem>
  );
}

export default MiniDrawerList;
