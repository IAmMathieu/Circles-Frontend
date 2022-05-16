import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetCircleQuery } from './CircleApi';

export default function CircleHeader() {
  const { token } = useSelector((state) => state.auth);
  const { circle_id } = useSelector((state) => state.circle);
  const {data: circleData } = useGetCircleQuery({ circle_id, token });
  console.log(circleData)
  
  return <Box className='flex w-screen'>
    <Box className='w-screen h-1/5 bg-contain'>
        {/* <img className='bg-contain' src={circleData.img_url} alt={circleData.name} /> */}
    </Box>
  </Box>;
}
