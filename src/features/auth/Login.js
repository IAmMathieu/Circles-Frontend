import { Input } from '../Common/Input/Input';
import Button from '@mui/material/Button';
import { handleSubmit } from './authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import React, { useEffect } from 'react';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, logged } = useSelector((state) => state.auth);
  let loading = useSelector((state) => state.auth.loading)
  useEffect(() => {
    if(logged){
      navigate('/dashboard');
    }
  },[logged])
  return (
    <div>
      <h1>homepage</h1>
      <form
        name='login-form'
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(handleSubmit());
        }}
      >
        <Input name={'email'} type={'email'} error={error} />
        <Input name={'password'} type={'password'} error={error} />
        <Button type={'submit'} variant='contained'>
          Contained
        </Button>
        {error && (
          <p className='text-orange-900'>
            L’adresse e-mail que vous avez saisi(e) n’est pas associé(e) à un
            compte. Créez un compte Circle.
          </p>
        )}
      </form>
    </div>
  );
};
