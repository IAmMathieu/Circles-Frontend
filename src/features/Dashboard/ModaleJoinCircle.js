import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from './dashboardSlice';

export default function ModaleJoinCircle({   
  open,
  toggleJoin,
  joinCircle,
  refetch,
  joinCircleError,
  joinCircleSuccess, }) {

    const dispatch = useDispatch();
    const { token, user_id } = useSelector((state) => state.auth);
    const { circle_code } = useSelector(
      (state) => state.dashboard
    );
  return (
    <div>
      <Dialog open={open} onClose={toggleJoin}>
        <DialogTitle>Rejoignez un cercle : </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally. 2f9FyzXZ
          </DialogContentText> */}
          <Box component='form' onSubmit={async (event) => {
            event.preventDefault();
            await joinCircle({
              token,
              user_id,
              circle_code,
            })
            refetch();
            toggleJoin();
          }} > 
          <TextField
            autoFocus
            margin='dense'
            id='circle_code'
            label='Code du cercle'
            error={joinCircleError}
            type='text'
            fullWidth
            variant='standard'
            InputLabelProps={{ style: { color: 'var(--maincolor-reverse)' } }}
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
