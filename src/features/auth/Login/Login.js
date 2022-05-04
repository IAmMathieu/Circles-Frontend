// import './styles.scss';
import { Input } from '../../../Components/Common/Input/Input';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
export const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>homepage</h1>
      <form className='login-form'>
        <Input name={'email'} />
        <Input name={'Password'} type={'password'} />
        <Button variant='contained'>Contained</Button>
      </form>
    </div>
  );
};
