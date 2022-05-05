import { Input } from '../Common/Input/Input';
import { handleSubmit } from './authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { MuiThemeLight, MuiThemeDark } from '../Common/MUITheme/muiTheme';
import './styles.scss';
import './../../styles/variables.css'
import { ThemeProvider } from '@emotion/react';
import { getStorage } from '../../utils/helperLocalStorage';


export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, logged } = useSelector((state) => state.auth);

  useEffect(() => {
    if (logged) {
      navigate('/dashboard');
    }
  }, [logged, navigate]);

  const handleSwitch = () => {
    const container = document.getElementById('container');
    container.classList.toggle('right-panel-active');
  };
  const theme = getStorage('theme');
  console.log(theme);
  return (
    <ThemeProvider theme={MuiThemeDark}>
      <div className='container' id='container'>
        <div className='form-container sign-up-container'>
          <form
            name='register-form'
            className='register-form'
            onSubmit={(event) => {
              event.preventDefault();
              // dispatch(handleRegisterSubmit());
            }}
          >
            <Input name={'Firstname'} type={'text'} />
            <Input name={'Lastname'} type={'text'} />
            <Input name={'Surname'} type={'text'} />
            <Input name={'Email'} type={'email'} error={error} />
            <Input name={'Password'} type={'password'} />
            <button className='button' type={'submit'}>
              Créer votre compte
            </button>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <form
            name='login-form'
            className='login-form'
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(handleSubmit());
            }}
          >
            <Input className='input'  color="primary" name={'Email'} type={'email'} error={error} />
            <Input className='input'  name={'Password'} type={'password'} error={error} />
            <a href='/'>Forgot your password?</a>
            <button className='button' type={'submit'} variant='contained'>
              Se connecter
            </button>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Bonjour !</h1>
              <p>Pour vous connecter, entrer</p>
              <button
                className='ghost button'
                id='signIn'
                variant='contained'
                onClick={handleSwitch}
              >
                Se connecter
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
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
    </ThemeProvider>
  );
};
