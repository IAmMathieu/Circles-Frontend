import { Avatar, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CircleHeader({ name, description, img_url, unique_code }){
  const { token } = useSelector((state) => state.auth);
  const { circle_id } = useSelector((state) => state.circle);


  return (
    <Box
        className='container-circle__box'
        sx={{
          position:'fixed',
          top:'0',
          // display: 'flex',
          // flexWrap: 'wrap',
          // '& > :not(style)': {
            width: '100%',
            height: '7rem',
          // },
          color: 'rgba(255,255,255,0.5)',
          backgroundImage:
            `url(${img_url})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          // margin: '1rem',
          // borderRadius: '15px',
        }}
      >
      <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              position: 'absolute',
              top: '7rem',
              fontSize: '2rem',
              marginLeft: '10rem',
              // transform: 'translateY(calc((7rem + 2rem)/2))',
              fontWeight: 'bold',
            }}
          >
            {name}
          </Typography>
        {/* <div className='container-avatar'> */}
          <Avatar
            alt={name}
            src={img_url}
            sx={{
              width: '7rem',
              height: '7rem',
              position: 'relative',
              top: '3rem',
              margin: 'auto',
              border: '1px solid white',
            }}
          />

          
        {/* </div> */}
      </Box>
  );
}
