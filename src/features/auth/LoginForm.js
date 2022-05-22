import { Input } from '../Common/Input/Input';
import { useEffect, useState } from 'react';
import './styles.scss';
import './../../styles/variables.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useLoginUserMutation, useRegisterUserMutation } from './authApi';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from '../../features/auth/authSlice';
import { Loading } from '../Loading/Loading';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';
import SnackBarAuth from './SnackBarAuth';
import moment from 'moment-timezone';
export const LoginForm = () => {
  const dispatch = useDispatch();
  // Get email and password from the slice state auth
  const { email, password, firstname, lastname, birthdate, surname } =
    useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [openSnacke, setOpenSnacke] = useState(false);

  const toggleSnacke = () => {
    setOpenSnacke(!openSnacke);
  };
  /**
   * Change the skip state, allow to fetch data from the server
   */
  const [date, setDate] = useState(Date);
  // First argument, the function we launch, second the result (destructuring here)
  const [
    loginUser,
    { isLoading: loginIsLoading, isError: loginIsError, error: loginError },
  ] = useLoginUserMutation();
  const [
    registerUser,
    {
      isLoading: registerIsLoading,
      isError: registerIsError,
      isSuccess: registerIsSuccess,
      error,
    },
  ] = useRegisterUserMutation();
  console.log(`🚀 ~ error`, error);
  /**
   * Add classlist to the container when click
   */

  useEffect(() => {
    registerIsSuccess && toggleSnacke();
  }, [registerIsSuccess]);
  const handleSwitch = () => {
    const container = document.getElementById('container');
    container.classList.toggle('right-panel-active');
  };
  return (
    <>
      {loginIsLoading && <Loading />}
      <div className='container' id='container'>
        <div className='form-container sign-up-container'>
          <h4 className='mobile-title mobile-title--signup'>S'enregistrer</h4>
          <form
            name='register-form'
            className='register-form flex flex-col '
            onSubmit={async (event) => {
              event.preventDefault();
              // Here we launch the RTK querie (mutation) with the arguments
              await registerUser({
                firstname,
                lastname,
                email,
                password,
                birthdate,
                surname,
              });
            }}
          >
            <Input name='Prénom' input='firstname' type={'text'} />
            <Input name='Nom' input='lastname' type={'text'} />
            <Input name='Pseudo' input='surname' type={'text'} />
            <Input
              name='E-mail'
              input='email'
              type='email'
              required={true}
              // error={loginIsError}
            />
            <Input name='Mot de passe' input='password' type={'password'} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label='Birth date'
                name='birthdate'
                value={birthdate}
                format='yyyy-mm-dd'
                onChange={(event) => {
                  // Reformatage de la date pour l'envoie vers la BDD
                  const [date] = event.toISOString().split('T');
                  const formatDate = moment(date)
                    .tz('Europe/Paris')
                    .format('YYYY-MM-DD');
                  dispatch(
                    handleChange({
                      name: 'birthdate',
                      payload: formatDate,
                    })
                  );
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <button className='button' type={'submit'}>
              Créer votre compte
            </button>
            <button
              className='ghost button button--signin'
              id='signIn'
              variant='contained'
              onClick={handleSwitch}
              type='button'
            >
              Se connecter
            </button>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <h4 className='mobile-title mobile-title--login'>Se connecter</h4>
          <form
            name='login-form'
            className='login-form'
            onSubmit={async (event) => {
              event.preventDefault();
              // Here we launch the RTK querie (mutation) with the arguments
              await loginUser({
                email,
                password,
              });
            }}
          >
            <div className='input__container relative flex flex-col'>
              <Input
                className='input'
                color='primary'
                name='Adresse mail'
                input='email'
                type='email'
                error={loginIsError}
              />
              <Input
                className='input'
                name='Mot de passe'
                input='password'
                type='password'
                error={loginIsError}
              />

              {loginIsError ? (
                <p
                  style={{
                    color: 'red',
                    position: 'absolute',
                    bottom: '-30px',
                    whiteSpace: 'nowrap',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontWeight: '700',
                  }}
                >
                  {loginError.data === 'Email does not exist'
                    ? "Le compte n'existe pas"
                    : loginError.data === 'Email does not exist'
                    ? 'E-mail ou mot de passe incorrect'
                    : loginError.data === 'Email not validated'
                    ? 'Votre e-mail doit être validé.'
                    : 'Une erreur est survenue'}
                </p>
              ) : (
                ''
              )}
            </div>

            <a className='forgot_password' href='/'>
              Mot de passe oublié?
            </a>
            <button className='button' type={'submit'} variant='contained'>
              Se connecter
            </button>
            <button
              className='ghost button button--signup z-50'
              id='signUp'
              type='button'
              variant='contained'
              onClick={handleSwitch}
            >
              S'inscrire
            </button>
          </form>
        </div>
        <div className='middleLine'></div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1 className='texts'>De retour sur Circles?</h1>
              <p className='texts'>Cliquez ci-dessous pour vous connecter</p>
              <button
                className='ghost button z-50'
                id='signIn'
                type='button'
                variant='contained'
                onClick={handleSwitch}
              >
                Se connecter
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1 className='texts'>Vous ne connaissez pas Circles?</h1>
              <p className='texts'>
                Cliquez ci-dessous pour vous inscrire et découvrir nos outils
              </p>
              <button
                className='ghost button'
                id='signUp'
                variant='contained'
                onClick={handleSwitch}
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
      <SnackBarAuth
        openSnacke={openSnacke}
        setOpenSnacke={setOpenSnacke}
        toggleSnacke={toggleSnacke}
      />
    </>
  );
};
