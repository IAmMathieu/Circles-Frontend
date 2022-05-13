import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles, styled } from '@mui/material';

const MyDialogContent = styled(Dialog)({
  background: '#212B36',
});
const MyDialogActions = styled(DialogActions)({
  background: '#212B36',
});
const MyDialogTitle = styled(DialogContent)({
  background: '#212B36',
});

export default function ModaleCreateCircle({ open, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontSize: '2rem', fontWeight: '700' }}>
          Créer votre propre Cercle !
        </DialogTitle>
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
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Description du cercle'
            type='text'
            fullWidth
            variant='standard'
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Couleur de votre cercle'
            type='color'
            fullWidth
            variant='standard'
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Image de votre cercle (url)'
            type='text'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Retour</Button>
          <Button onClick={handleClose}>Créer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
