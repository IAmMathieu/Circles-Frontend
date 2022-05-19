import { Box, Container, Paper } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CircleHeader({ circleData }) {
  const { token } = useSelector((state) => state.auth);
  const { circle_id } = useSelector((state) => state.circle);

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: '20%', width: '95%' }}
    >
      <Box
        sx={{
          backgroundImage: `url(${circleData?.img_url})`,
          height: '100%',
          borderRadius: '10px 10px 0 0 ',
          width: '100%',
        }}
      />
      <Paper
        sx={{
          height: '50px',
          borderRadius: '0 0 10px 10px ',
          transform: 'translateX(-5px)',
          width: '100%',
        }}
      >
        Coucou
      </Paper>
    </Container>
  );
}
