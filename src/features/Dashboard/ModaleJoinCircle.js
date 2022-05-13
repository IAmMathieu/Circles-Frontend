import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ModaleJoinCircle({ open, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rejoignez un cercle : </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin='dense'
            id='circle_code'
            label='Code du cercle'
            type='text'
            fullWidth
            variant='standard'
            sx={{ color: 'red' }}
            InputLabelProps={{ style: { color: 'var(--maincolor-reverse)' } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleClose}>Rejoindre</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
