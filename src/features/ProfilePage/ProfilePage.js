import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Input } from '../Common/Input/Input';
import logo from './../../logo.svg';
import './style.scss';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  useGetProfilUserQuery,
  useUpdateProfilUserMutation,
  useDeleteProfilUserMutation,
} from './ProfilApi';
import { Loading } from '../Loading/Loading';
import { removeStorage } from '../../utils/helperLocalStorage';
import { handleToken } from '../auth/authSlice';

//! MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//!------------

function ProfilePage() {
  //! MUI
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //!--------------

  const dispatch = useDispatch();
  const inputData = useSelector((state) => state.auth);
  const { token, user_id } = inputData;
  /**
   * Query profil data when coming to the page
   */
  const { data, isLoading } = useGetProfilUserQuery({
    token,
    user_id,
  });
  const [updateProfilUser, { isLoading: isLoadingUpdate }] =
    useUpdateProfilUserMutation();
  const [deleteProfilUser] = useDeleteProfilUserMutation();

  const userPicture =
    'https://ca.slack-edge.com/T02MBC4J9K5-U02M8CJUVJR-2df2ffa3c507-512';

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div>
        <img src={logo} alt='Logo Circles' className='circle-logo' />
        <img
          src={userPicture}
          alt='User Portrait'
          className='leftmenu--user-picture'
        />
        <h2 className='text-4xl font-bold underline mb-5'>{data?.surname}</h2>

        <h3 className='text-2xl font-bold '> Your informations : </h3>
        <form
          name='register-form'
          className='register-form flex flex-col gap-2 '
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Input
            helperText={'Firstname'}
            name={data?.firstname}
            input='firstname'
            type={'text'}
          />
          <Input
            name={data?.lastname}
            input='lastname'
            type={'text'}
            helperText={'Lastname'}
          />
          <Input
            name={data?.surname}
            input='surname'
            type={'text'}
            helperText={'Surname'}
          />
          <Input
            name={data?.email}
            input='email'
            type={'email'}
            helperText={'Email'}

            // error={loginIsError}
          />
          <Input
            name='Ancien mot de passe'
            input='oldPassword'
            type={'password'}
          />
          <Input
            className={'mb-5'}
            name='Nouveau mot de passe'
            input='password'
            type={'password'}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Birth date'
              name='birthdate'
              value={data?.birthdate}
              format='yyyy-mm-dd'
              onChange={(event) => {
                // Reformatage de la date pour l'envoie vers la BDD
                // const [date] = event.toISOString().split('T');
                //   dispatch(
                //     handleChange({
                //       name: 'birthdate',
                //       payload: date,
                //     })
                //   );
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <div className='button__container flex gap-5 mt-5'>
            <Button
              color='warning'
              variant='contained'
              onClick={async (e) => {
                const newObj = { ...inputData };
                for (const key in newObj) {
                  if (newObj[key] === '') {
                    delete newObj[key];
                  }
                }
                e.preventDefault();
                await updateProfilUser({
                  newObj,
                });
              }}
            >
              Modifier
            </Button>
            <Button color='error' variant='contained' onClick={handleClickOpen}>
              Supprimer
            </Button>
          </div>
        </form>
        {/* MUI */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            {'Supprimer votre compte ?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Si vous acceptez, l'entièreté de vos données seront effacées.
              Continuer?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color='secondary' onClick={handleClose}>
              Retour
            </Button>
            <Button
              color='error'
              onClick={async (e) => {
                e.preventDefault();
                const newObj = { ...inputData };
                for (const key in newObj) {
                  if (newObj[key] === '') {
                    delete newObj[key];
                  }
                }
                await deleteProfilUser({
                  newObj,
                });
                dispatch(
                  handleToken({
                    token: '',
                    user_id: '',
                  })
                );
                removeStorage('token');
                removeStorage('user_id');
              }}
              autoFocus
            >
              Supprimer
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default ProfilePage;
