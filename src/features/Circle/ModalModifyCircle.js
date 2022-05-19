import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import { Box, Modal, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from './CircleSlice';
import { useGetUserDashBoardQuery } from '../Dashboard/DashboardApi';
import { useLocalstorageState } from 'rooks';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '50%',
  bgcolor: 'background.paper',
  color: 'var(--backgroundbutton)',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
};

export default function ModaleModifyCircle({
  open,
  toggleModify,
  circleData,
  modifyCircle,
  refetch,
  modifyCircleError,
  modifyCircleSuccess,
  deleteCircle
}) {
  
  const [token, setToken] = useLocalstorageState('token', 0);
  const [user_id, setUserId] = useLocalstorageState('user_id', 0);
  const dispatch = useDispatch();
  const { circle_id, name, description, color, img_url } = useSelector(
    (state) => state.circle
  );

 const { refetch: dashDataRefretch } = useGetUserDashBoardQuery(
     {
       token,
       user_id,
     }
   );
 return (
    <div>
      <Modal open={open} onClose={toggleModify}>
        <Box
          sx={style}
          component='form'
          autoComplete='off'
          onSubmit={async (event) => {
            event.preventDefault();
            await modifyCircle({
              circle_id,
              token,
              user_id,
              name,
              description,
              color,
              img_url,
            });
            dashDataRefretch();
            toggleModify();
          }}
        >
          <Typography sx={{ fontSize: '2rem', fontWeight: '700' }}>
            Modifier ou supprimer le cercle
          </Typography>
          <TextField
            autoFocus
            required
            margin='dense'
            error={modifyCircleError}
            value={name}
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
            margin='dense'
            required
            id='name'
            label='Description du cercle'
            type='text'
            value={description}
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
            required
            margin='dense'
            id='name'
            label='Couleur de votre cercle'
            type='color'
            value={color}
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
            required
            margin='dense'
            id='name'
            label='Image de votre cercle (url)'
            type='text'
            value={img_url}
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
            <Button onClick={async (event) => {
            event.preventDefault();
            await deleteCircle({
              circle_id,
              token,
              user_id,
            });
            refetch();
            toggleModify();
          }}>Supprimer le cercle</Button>
            <Button type='submit'>Modifier</Button>
          </DialogActions>
        </Box>
      </Modal>
    </div>
  );
}
