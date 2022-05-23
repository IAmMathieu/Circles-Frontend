import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';

export default function CreateEvent() {
  return (
    <div>
      <Dialog>
        <DialogTitle>Créer un événement : </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally. 2f9FyzXZ
          </DialogContentText> */}
          <Box
            component='form'
            onSubmit={async (event) => {
              event.preventDefault();
            }}
          >
            <TextField
              autoFocus
              margin='dense'
              id='circle_code'
              label='Code du cercle'
              type='text'
              fullWidth
              variant='standard'
              InputLabelProps={{ style: { color: 'var(--maincolor-reverse)' } }}
              onChange={(event) => {}}
            />
            <DialogActions>
              <Button>Annuler</Button>
              <Button type='submit'>Rejoindre</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
