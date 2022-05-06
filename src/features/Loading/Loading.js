import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
export const Loading = () => {
  return (
    // <div className='h-screen w-screen bg-black bg-opacity-50 z-10 fixed top-0 left-0'>
    // <>
    //   <CircularProgress className='w-[500px] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
    // </>
    <Box
      className='loading'
      sx={{
        position: 'fixed',
        top: '0',
        left: '0',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress sx={''} size='15rem' />
    </Box>
    // </div>
  );
};
