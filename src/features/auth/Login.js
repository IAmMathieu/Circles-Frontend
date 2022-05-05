import { Input } from '../Common/Input/Input';
import Button from '@mui/material/Button';
import { handleSubmit } from './authSlice';
import { useDispatch, useSelector } from 'react-redux';
export const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
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
// 'L’adresse e-mail que vous avez saisi(e) n’est pas associé(e) à un compte. Créez un compte Circle.'
