import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from './dashboardSlice';
import { Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '30%',
  bgcolor: 'var(--maincolor-reverse)',
  color: 'var(--background)',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
};

export default function ModaleJoinCircle({
  open,
  toggleJoin,
  joinCircle,
  refetch,
  joinCircleError,
  joinCircleSuccess,
}) {
  const dispatch = useDispatch();
  const { token, user_id } = useSelector((state) => state.auth);
  const { circle_code } = useSelector((state) => state.dashboard);
  return (
    <div>
      <Modal open={open} onClose={toggleJoin}>
        <Box
          sx={style}
          component='form'
          onSubmit={async (event) => {
            event.preventDefault();
            await joinCircle({
              token,
              user_id,
              circle_code,
            });
            refetch();
            toggleJoin();
          }}
        >
          <Typography
            variant='h3'
            sx={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginBottom: '.8rem',
              textDecoration: 'underline',
            }}
          >
            Rejoignez un cercle :
          </Typography>
          <TextField
            autoFocus
            margin='dense'
            id='circle_code'
            label='Code du cercle'
            error={joinCircleError}
            type='text'
            fullWidth
            variant='standard'
            InputLabelProps={{ style: { color: 'var(--background)' } }}
            onChange={(event) => {
              dispatch(
                handleChange({
                  name: 'circle_code',
                  payload: event.target.value,
                })
              );
            }}
          />
          <DialogActions>
            <Button onClick={toggleJoin}>Annuler</Button>
            <Button type='submit'>Rejoindre</Button>
          </DialogActions>
        </Box>
      </Modal>
    </div>
  );
}
