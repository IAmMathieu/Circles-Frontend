import { CircularProgress } from '@mui/material';

export const Loading = () => {
  return (
    <div className='h-screen w-screen bg-black bg-opacity-50 z-10 relative'>
      <CircularProgress className='w-50 h-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
    </div>
  );
};
