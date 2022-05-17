import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, styled } from '@mui/material';
import { handleChange } from './dashboardSlice';
import { useDispatch, useSelector } from 'react-redux';

const MyDialogContent = styled(Dialog)({
  background: '#212B36',
});
const MyDialogActions = styled(DialogActions)({
  background: '#212B36',
});
const MyDialogTitle = styled(DialogContent)({
  background: '#212B36',
});
export default function ModaleCreateCircle({
  open,
  toggleCreate,
  createCircle,
  refetch,
  createCircleError,
  createCircleSuccess,
}) {
  const dispatch = useDispatch();
  const { name, description, color, img_url } = useSelector(
    (state) => state.dashboard
  );
  const { token, user_id } = useSelector((state) => state.auth);
  return (
    <div>
      <Dialog open={open} onClose={toggleCreate}>
        <DialogTitle sx={{ fontSize: '2rem', fontWeight: '700' }}>
          Créer votre propre Cercle !
        </DialogTitle>
        <DialogContent>
          <Box
            component='form'
            autoComplete='off'
            onSubmit={async (event) => {
              event.preventDefault();
              await createCircle({
                token,
                user_id,
                name,
                description,
                color,
                img_url,
              });
              refetch();
              toggleCreate();
            }}
          >
            <TextField
              autoFocus
              required
              margin='dense'
              error={createCircleError}
              id='name'
              label='Nom du cercle'
              type='text'
              fullWidth
              variant='standard'
              sx={{ color: 'red' }}
              onChange={(event) => {
                dispatch(
                  handleChange({
                    name: 'name',
                    payload: event.target.value,
                  })
                );
              }}
            />
            <TextField
              autoFocus
              margin='dense'
              required
              id='name'
              label='Description du cercle'
              type='text'
              fullWidth
              variant='standard'
              onChange={(event) => {
                dispatch(
                  handleChange({
                    name: 'description',
                    payload: event.target.value,
                  })
                );
              }}
            />
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
            <TextField
              autoFocus
              required
              margin='dense'
              id='name'
              label='Image de votre cercle (url)'
              type='text'
              fullWidth
              variant='standard'
              onChange={(event) => {
                dispatch(
                  handleChange({
                    name: 'img_url',
                    payload: event.target.value,
                  })
                );
              }}
            />
            <DialogActions>
              <Button onClick={toggleCreate}>Retour</Button>
              <Button type='submit'>Créer</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
