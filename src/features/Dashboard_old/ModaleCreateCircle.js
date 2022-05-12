import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/material';

export default function ModaleCreateCircle({ open, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Créez votre propre Cercle ! : </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Nom du cercle'
            type='text'
            fullWidth
            variant='standard'
            sx={{ color: 'red' }}
            InputLabelProps={{ style: { color: 'var(--maincolor-reverse)' } }}
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Description du cercle'
            type='text'
            fullWidth
            variant='standard'
            InputLabelProps={{ style: { color: 'var(--maincolor-reverse)' } }}
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Couleur de votre cercle'
            type='color'
            fullWidth
            variant='standard'
            InputLabelProps={{ style: { color: 'var(--maincolor-reverse)' } }}
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Image de votre cercle (url)'
            type='text'
            fullWidth
            variant='standard'
            InputLabelProps={{ style: { color: 'var(--maincolor-reverse)' } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
