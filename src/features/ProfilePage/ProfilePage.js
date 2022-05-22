import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { useLocalstorageState } from 'rooks';

//!------------
//! Ajouter le oldpassword pour modifier des données et/ou supprimer
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
  // const { token, user_id } = inputData;
  const [token, setToken] = useLocalstorageState('token', 0);
  const [user_id, setUserId] = useLocalstorageState('user_id', 0);
  /**
   * Query profil data when coming to the page
   */
  const { data, isLoading } = useGetProfilUserQuery({
    token,
    user_id,
  });
  const [updateProfilUser, { isLoading: isLoadingUpdate, error }] =
    useUpdateProfilUserMutation();
  const [deleteProfilUser] = useDeleteProfilUserMutation();

  useEffect(() => {
    document.title = `Circle - Profil`;
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Box component='div' sx={{ height: '100%', padding: '1rem' }}>
        <img src={logo} alt='logo Circles ' className='m-auto w-40'></img>
        <Box
          className='container-page'
          sx={{
            height: '75vh',
            overflowY: 'scroll',
            maxWidth: '100%',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '@media (min-width:1000px)': {
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            },
          }}
        >
          <Card
            sx={{
              borderRadius: '50%',
              width: '25%',
              margin: 'auto',
              // '@media (min-width:965px)': {
              //   width: '30%',
              // },
            }}
          >
            <Box component='div'>
              <img
                src={data?.img_url}
                alt='User Portrait'
                className='p-1.5 rounded-full m-auto w-full'
              />
            </Box>
          </Card>

          <Card
            sx={{
              // margin: '0.8rem auto',
              backgroundColor: 'transparent',
              borderRadius: '20px',
              height: 'fit-content',
              margin: '0 auto',
              marginBottom: '1rem',
              '@media (min-width:1000px)': {
                width: '50vw',
                maxWidth: '800px',
                height: 'fit-content',
              },
            }}
          >
            <Typography
              component='h2'
              sx={{
                fontWeight: 'bold',
                textDecoration: 'underline',
                fontSize: '2.5rem',
              }}
            >
              {data?.surname}
            </Typography>

            <Typography
              component='h3'
              sx={{ margin: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              {' '}
              Vos informations :{' '}
            </Typography>
            <Box
              component='form'
              name='register-form'
              onSubmit={(event) => {
                event.preventDefault();
              }}
              sx={{ justifyContent: 'start' }}
            >
              <Input
                helperText={'Prénom'}
                input='firstname'
                type={'text'}
                value={data?.firstname}
              />
              <Input
                value={data?.lastname}
                input='lastname'
                type={'text'}
                helperText={'Nom'}
              />
              <Input
                value={data?.surname}
                input='surname'
                type={'text'}
                helperText={'Pseudo'}
              />
              <Input
                value={data?.email}
                input='email'
                type={'email'}
                helperText={'Email'}

                // error={loginIsError}
              />
              <Input
                name='Ancien mot de passe'
                input='password'
                type={'password'}
              />
              <Input
                className={'mb-5 max-w-screen-sm'}
                name='Nouveau mot de passe'
                input='newpassword'
                type={'password'}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label='Date de Naissance'
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
              <Box
                component='div'
                sx={{ margin: '0.8rem', display: 'flex', gap: '1rem' }}
              >
                <Button
                  sx={{
                    backgroundColor: 'red',
                    ':hover': {
                      color: 'white',
                      backgroundColor: '#f57803',
                    },
                    '&.MuiButton-root': {
                      backgroundColor: '#EE9F28',
                    },
                  }}
                  variant='contained'
                  onClick={async (e) => {
                    e.preventDefault();
                    await updateProfilUser(inputData);
                  }}
                >
                  Modifier
                </Button>
                <Button
                  sx={{
                    ':hover': {
                      color: 'white',
                      backgroundColor: '#f50303',
                    },
                    '&.MuiButton-root': {
                      backgroundColor: 'red',
                    },
                  }}
                  variant='contained'
                  onClick={handleClickOpen}
                >
                  Supprimer
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
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
                //! TO refactor
                const newObj = { ...inputData };
                for (const key in newObj) {
                  if (newObj[key] === '') {
                    delete newObj[key];
                  }
                }
                await deleteProfilUser(newObj);
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
      </Box>
    );
  }
}
export default ProfilePage;
