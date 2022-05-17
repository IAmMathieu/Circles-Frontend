import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CircleHeader({ circleData }){
  const { token } = useSelector((state) => state.auth);
  const { circle_id } = useSelector((state) => state.circle);


  return (
    <Box className='flex w-screen'>
      <Box className='w-screen h-1/5 bg-contain'>
        {/* <img className='bg-cover w-full h-1/5' src={circleData.img_url} alt={circleData.name} /> */}
      </Box>
    </Box>
  );
}
