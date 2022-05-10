import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Input } from '../Common/Input/Input';
import Button from '@mui/material/Button';
import logo from './../../logo.svg';
import './style.scss';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  useGetProfilUserQuery,
  useUpdateProfilUserMutation,
  useDeleteProfilUserMutation,
} from './ProfilApi';
import { Loading } from '../Loading/Loading';
function ProfilePage() {
  const {
    firstname,
    lastname,
    email,
    password,
    surname,
    birthdate,
    token,
    user_id,
  } = useSelector((state) => state.auth);
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
        <form
          name='register-form'
          className='register-form flex flex-col '
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Input name={data?.firstname} input='firstname' type={'text'} />
          <Input name={data?.lastname} input='lastname' type={'text'} />
          <Input name={data?.surname} input='surname' type={'text'} />
          <Input
            name={data?.email}
            input='email'
            type={'email'}
            // error={loginIsError}
          />
          <Input name='Mot de passe' input='password' type={'password'} />
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
          <div className='button__container flex gap-5'>
            <Button
              color='warning'
              variant='contained'
              onClick={async (e) => {
                e.preventDefault();
                const patchFirstName = firstname ? firstname : data.firstname;
                const patchLastName = lastname ? lastname : data.lastname;
                const patchEmail = email ? email : data.email;
                const patchSurname = surname ? surname : data.surname;
                const patchBirthdate = birthdate ? birthdate : data.birthdate;

                await updateProfilUser({
                  token,
                  user_id,
                  firstname: patchFirstName,
                  lastname: patchLastName,
                  email: patchEmail,
                  surname: patchSurname,
                  birthdate: patchBirthdate,
                });
              }}
            >
              Modifier
            </Button>
            <Button
              color='error'
              variant='contained'
              onClick={async (e) => {
                e.preventDefault();
                await deleteProfilUser({
                  user_id,
                  token,
                });
              }}
            >
              Supprimer
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfilePage;
