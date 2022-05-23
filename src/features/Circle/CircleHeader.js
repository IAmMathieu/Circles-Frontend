import { Box, Container, IconButton, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import { handleChange } from './CircleSlice';
export default function CircleHeader({
  circleData,
  toggleModify,
  toggleInvite,
}) {
  const { token } = useSelector((state) => state.auth);
  const { circle_id, menu } = useSelector((state) => state.circle);
  const dispatch = useDispatch();
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: '20%',
        width: '100% ',
        padding: { xs: '1rem', lg: '1rem' },
        paddingTop: { xs: '0vh', lg: '1rem' },
        marginBottom: { md: '3vh', lg: '10vh' },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${circleData?.img_url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '15vh', lg: '20vh' },
          borderRadius: '10px 10px 0 0 ',
          width: '100%',
        }}
      />
      <Paper
        style={{ backgroundColor: 'var(--background)' }}
        sx={{
          height: { xs: '5vh', lg: '80px' },
          borderRadius: '0 0 10px 10px ',
          // transform: 'translateX(-5px)',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: { xs: '50%', md: '20%' },
            transform: 'translate(-50%,-50%)',
            gap: { xs: '0.5rem', md: '1rem' },
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Typography sx={{ fontSize: 'calc(1vw + 1vh + 1vmin)' }}>
            {circleData?.name}
          </Typography>
          <EditIcon
            sx={{ fontSize: 'calc(1vw + 1vh + -)' }}
            onClick={() => {
              toggleModify();
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '20%',
            gap: '3rem',
          }}
        >
          <Typography
            component='p'
            color='error'
            variant='h5'
            onClick={() => {
              dispatch(handleChange({ name: 'menu', payload: 'calendar' }));
            }}
          >
            Calendrier
          </Typography>
          <Typography
            component='p'
            color='error'
            variant='h5'
            onClick={() => {
              dispatch(handleChange({ name: 'menu', payload: 'chat' }));
            }}
          >
            Chat
          </Typography>
        </Box>
        <IconButton
          onClick={() => toggleInvite()}
          sx={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <PersonAddIcon sx={{ fontSize: { xs: '1.5rem', lg: '2.5rem' } }} />
        </IconButton>
      </Paper>
    </Container>
  );
}
