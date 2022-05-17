import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Button, DialogActions, FormControlLabel, FormGroup, Stack, Switch, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  DatePicker,
  DateTimePicker,
  DesktopDateTimePicker,
  LocalizationProvider,
  MobileDateTimePicker,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  color: 'var(--backgroundbutton)',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
};

export default function ModalEvent({ open, onClose }) {
  const [startDate, setStartDate] = useState(new Date('2018-01-01T00:00:00.000Z'));
  const [endDate, setEndDate] = useState(new Date('2018-01-01T00:00:00.000Z'));


  return (
    <Box>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} component='form'>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Ajouter un événement
          </Typography>
          <TextField
            autoFocus
            required
            margin='dense'
            id='title'
            label='Titre'
            type='text'
            fullWidth
            variant='standard'
            sx={{ color: 'red' }}
            //   onChange={(event) => {
            //     dispatch(
            //       handleChange({
            //         name: 'name',
            //         payload: event.target.value,
            //       })
            //     );
            //   }}
          />
          <TextField
            autoFocus
            required
            margin='dense'
            id='description'
            label='Description'
            multiline
            rows={4}
            type='text'
            fullWidth
            variant='standard'
            sx={{ color: 'red' }}
            //   onChange={(event) => {
            //     dispatch(
            //       handleChange({
            //         name: 'name',
            //         payload: event.target.value,
            //       })
            //     );
            //   }}
          />
          <FormGroup>
            <FormControlLabel control={<Switch />} label='Toute la journée' />
          </FormGroup>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <MobileDateTimePicker
                label='For mobile'
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <MobileDateTimePicker
                label='For mobile'
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <TextField
              autoFocus
              required
              margin='dense'
              id='name'
              label='Couleur de votre cercle'
              type='color'
              defaultValue='#212B36'
              fullWidth
              variant='standard'
            //   onChange={(event) => {
            //     dispatch(
            //       handleChange({
            //         name: 'color',
            //         payload: event.target.value,
            //       })
            //     );
            //   }}
            />
          <DialogActions>
              <Button onClick={onClose}>Retour</Button>
              <Button type='submit'>Créer</Button>
            </DialogActions>
        </Box>
      </Modal>
    </Box>
  );
}
