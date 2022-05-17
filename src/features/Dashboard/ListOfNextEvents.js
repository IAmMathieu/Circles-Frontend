import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Grid, Modal, Slide, Typography } from '@mui/material';
import { format } from 'date-fns';
import './style.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {md: '50%', xs: '80%'},
  textAlign: 'center',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
};

export default function ListOfNextEvents({ open, onClose, eventsList }) {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style} className='modal'>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginBottom: '.8rem',
              textDecoration: 'underline',
            }}
          >
            Prochains événements
          </Typography>
          <Typography>
            {eventsList.map((event) => {
              if (event !== null) {
                return (
                  <Grid container key={Date.now()}>
                    <Grid item xs={12} sm={4} sx={{fontSize:'.8rem', alignSelf: 'center', borderRight: {sm:'1px solid #000'}}}>
                      {format(new Date(event.start), 'dd/MM/yyyy')}
                    </Grid>
                    <Grid item xs={12} sm={8} >{event.title}</Grid>
                  </Grid>
                );
              }
            })}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
