import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import moment from 'moment-timezone';
import {
  Button,
  DialogActions,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import {
  DatePicker,
  DateTimePicker,
  DesktopDateTimePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';

import { MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { handleChange } from './CalendarSlice';
import { useParams } from 'react-router';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vh',
  bgcolor: 'background.paper',
  color: 'var(--backgroundbutton)',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
  height: '60vh',
  padding: '10rem',
};
export default function ModalEvent({
  open,
  onClose,
  createEvent,
  calendarControlled,
  user_id,
  token,
  circleRefetch,
}) {
  const dispatch = useDispatch();
  const { circle_id } = useParams();
  const [startDate, setStartDate] = useState(
    new Date('2018-01-01 00:00:00.000Z')
  );
  const [endDate, setEndDate] = useState(new Date('2018-01-01 00:00:00.000Z'));

  return (
    <Box>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={style}
          component='form'
          onSubmit={async (e) => {
            e.preventDefault();
            const newObj = await { ...calendarControlled };
            for (const key in newObj) {
              if (newObj[key] === '' || null) {
                delete newObj[key];
              }
            }
            await createEvent({
              ...newObj,
              circle_id,
              user_id,
              token,
            });
            await circleRefetch();
          }}
        >
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
            onChange={(event) => {
              dispatch(
                handleChange({
                  name: 'title',
                  payload: event.target.value,
                })
              );
            }}
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
            onChange={(event) => {
              dispatch(
                handleChange({
                  name: 'description',
                  payload: event.target.value,
                })
              );
            }}
          />
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label='Toute la journée'
              onChange={(event) => {
                dispatch(
                  handleChange({
                    name: 'allday',
                    payload: event.target.checked,
                  })
                );
              }}
            />
          </FormGroup>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              {calendarControlled?.allday === false ? (
                <DateTimePicker
                  mask='mm'
                  value={new Date()}
                  label='Start event : '
                  onChange={(event) => {
                    const date = moment(event)
                      .tz('Europe/Paris')
                      .format('YYYY-MM-DDTHH:mm:ss');
                    dispatch(
                      handleChange({
                        name: 'start',
                        payload: date,
                      })
                    );
                  }}
                  renderInput={(props) => <TextField {...props} />}
                />
              ) : (
                <DatePicker
                  // mask='mm'
                  value={new Date()}
                  format='yyyy-mm-dd'
                  mask='____/__/__'
                  label='Start event : '
                  onChange={(event) => {
                    dispatch(
                      handleChange({
                        name: 'start',
                        payload: event,
                      })
                    );
                  }}
                  renderInput={(props) => <TextField {...props} />}
                />
              )}

              <DateTimePicker
                mask='mm'
                disabled={calendarControlled?.allday === true ? true : false}
                label='End event : '
                value={new Date()}
                onChange={(event) => {
                  const date = moment(event)
                    .tz('Europe/Paris')
                    .format('YYYY-MM-DD HH:mm:ss');
                  dispatch(
                    handleChange({
                      name: 'end',
                      payload: date,
                    })
                  );
                }}
                renderInput={(props) => <TextField {...props} />}
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
            onChange={(event) => {
              dispatch(
                handleChange({
                  name: 'color',
                  payload: event.target.value,
                })
              );
            }}
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
