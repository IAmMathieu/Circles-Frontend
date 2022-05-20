import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import { BottomNavigationAction, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeMenu } from './CircleSlice';

export default function CircleBottomNavigation() {
  const dispatch = useDispatch();

  return (
    <Box
      className='bottomNavigation'
      sx={{
        display: { sx: 'inherit', lg: 'none' },
        width: '100%',
        borderRadius: '15px',
        bottom: 0,
        position: 'absolute',
        overflow: 'hidden',
        height: '70px',
        '@media (min-width:965px)': {
          position: 'absolute',
          top: '5rem',
          right: '2rem',
          width: '40%',
          maxWidth: '500px',
        },
      }}
    >
      <BottomNavigation className='h-full px-10' showLabels>
        <BottomNavigationAction
          label='Calendrier'
          icon={<AddCircleIcon />}
          onClick={() => dispatch(changeMenu('calendar'))}
        />
        <BottomNavigationAction label='Chat' icon={<GroupsIcon />} onClick={() => dispatch(changeMenu('chat'))} />

      </BottomNavigation>
    </Box>
  );
}
