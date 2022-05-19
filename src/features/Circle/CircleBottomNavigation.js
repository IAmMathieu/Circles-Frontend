import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import { Typography } from '@mui/material';
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
      <BottomNavigation className='h-full px-10'>
        <div className=' w-full flex justify-between items-center'>
          <Box
            className='flex flex-col items-center'
            onClick={() => dispatch(changeMenu('calendar'))}
          >
            <AddCircleIcon />
            <Typography className='text-xs custom-bk:text-lg' component='h5'>
              Calendrier
            </Typography>
          </Box>
          <Box
            className='flex flex-col items-center'
            onClick={() => dispatch(changeMenu('chat'))}
          >
            <GroupsIcon />
            <Typography className='text-xs custom-bk:text-lg' component='h5'>
              Chat
            </Typography>
          </Box>
        </div>
      </BottomNavigation>
    </Box>
  );
}
