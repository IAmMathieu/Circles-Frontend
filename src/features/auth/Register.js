import { Input } from '../Common/Input/Input';
import Button from '@mui/material/Button';
import { handleRegisterSubmit } from './authSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Register = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  return (
    <div>
      <h1>Page de création de compte</h1>
      <form
        name='register-form'
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(handleRegisterSubmit());
        }}
      >
        <Input name={'email'} type={'email'} error={error}  />
        <Input name={'password'} type={'password'} />
        <Input name={'firstname'} type={'text'} />
        <Input name={'lastname'} type={'text'} />
        <Input name={'surname'} type={'text'} />
        <Button type={'submit'} variant='contained'>
          Contained
        </Button>
        {error && (
          <p className='text-orange-900'>
            L'adresse mail correspond à un compte existant. Merci de vous connecter
          </p>
        )}
      </form>
    </div>
  );
};
