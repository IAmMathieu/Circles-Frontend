import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import './SimpleBottomNavigation.scss';
export default function SimpleBottomNavigation({
  handleClickOpenCreate,
  handleClickOpenJoin,
}) {
  return (
    <Box
      className='bottomNavigation'
      sx={{
        width: '100%',
        borderRadius: '15px',
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
            className='flex flex-col items-center hover:cursor-pointer'
            onClick={() => {
              handleClickOpenCreate();
            }}
          >
            <AddCircleIcon />
            {/* <Typography className='text-xs custom-bk:text-2xl' component='h5'> */}
            <Typography className='text-xs custom-bk:text-lg' component='h5'>
              Créer
            </Typography>
          </Box>
          <Box
            className='flex flex-col items-center hover:cursor-pointer'
            onClick={() => {
              handleClickOpenJoin();
            }}
          >
            <GroupsIcon />
            <Typography className='text-xs custom-bk:text-lg' component='h5'>
              Rejoindre
            </Typography>
          </Box>
          <div className='flex flex-col items-center hover:cursor-pointer'>
            <SearchIcon />
            <Typography className='text-xs custom-bk:text-lg' component='h5'>
              Découvrir
            </Typography>
          </div>
        </div>
      </BottomNavigation>
    </Box>
  );
}
