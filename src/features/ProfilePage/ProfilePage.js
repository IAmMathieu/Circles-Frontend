import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Input } from '../Common/Input/Input';
import logo from './../../logo.svg';
import './style.scss';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function ProfilePage() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(Date);

  const userPicture =
    'https://ca.slack-edge.com/T02MBC4J9K5-U02M8CJUVJR-2df2ffa3c507-512';
  const username = 'Aleks';

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
        <Input name='Prénom' input='firstname' type={'text'} />
        <Input name='Nom' input='lastname' type={'text'} />
        <Input name='Pseudo' input='surname' type={'text'} />
        <Input
          name='E-mail'
          input='email'
          type={'email'}
          // error={loginIsError}
        />
        <Input name='Mot de passe' input='password' type={'password'} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label='Birth date'
            name='birthdate'
            value={date}
            format='yyyy-mm-dd'
            onChange={(event) => {
              // Reformatage de la date pour l'envoie vers la BDD
              const [date] = event.toISOString().split('T');
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
        <button className='button' type={'submit'}>
          Créer votre compte
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;
