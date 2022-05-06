import React from 'react';
import { LoginForm } from './LoginForm';
import fullLogo from '../../assets/images/fullLogoNight.svg';

export const Login = () => {
  return (
    <div className='login-container'>
      <img src={fullLogo} alt='Logo Circles' className='circle-logo' />
      <LoginForm />
    </div>
  );
};
