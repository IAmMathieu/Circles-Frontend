import { Input } from '../Common/Input/Input';
import { handleSubmit } from './authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import './styles.scss';
import './../../styles/variables.css';

import { getStorage } from '../../utils/helperLocalStorage';
import { useLoginUserQuery } from './authApi';
export const LoginForm = () => {
  const [skip, setSkip] = useState(true);
  const { data, isLoading, isFetching, isSuccess, isError } = useLoginUserQuery(
    {
      email: 'tourte.m@gmail.com',
      password: '123456',
    },
    {
      skip,
    }
  );

  const handleSwitch = () => {
    const container = document.getElementById('container');
    container.classList.toggle('right-panel-active');
  };
  return (
    <div className='container' id='container'>
      <div className='form-container sign-up-container'>
        <form
          name='register-form'
          className='register-form'
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Input name='Prénom' input='firstname' type={'text'} />
          <Input name='Nom' input='lastname' type={'text'} />
          <Input name='Pseudo' input='surname' type={'text'} />
          <Input name='E-mail' input='email' type={'email'} error={isError} />
          <Input name='Mot de passe' input='password' type={'password'} />
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
            // dispatch(handleSubmit());
            // const token = getStorage('token');
            setSkip(false);
          }}
        >
          <div className='input__container relative flex flex-col'>
            <Input
              className='input'
              color='primary'
              name='Adresse mail'
              input='email'
              type='email'
              error={isError}
            />
            <Input
              className='input'
              name='Mot de passe'
              input='password'
              type='password'
              error={isError}
            />

            {isError ? (
              <p className='text-red-500 absolute bottom-[-30px] whitespace-nowrap left-1/2 transform -translate-x-1/2 font-bold'>
                E-mail ou mot de passe incorrect
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
        </form>
      </div>
      <div className='middleLine'></div>
      <div className='overlay-container'>
        <div className='overlay'>
          <div className='overlay-panel overlay-left'>
            <h1 className='texts'>De retour sur Circle?</h1>
            <p className='texts'>Cliquez ci-dessous pour vous connecter</p>
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
            <h1 className='texts'>Vous ne connaissez pas Circle?</h1>
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
  );
};
