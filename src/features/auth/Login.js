import { LoginForm } from './LoginForm';
import fullLogo from '../../assets/images/fullLogoNight.svg';
import SwitchDL from './SwitchDL';

export const Login = ({setTheme, theme}) => {
  return (
    <div className='login-container'>
    <SwitchDL setTheme={setTheme} theme={theme} />
      <img src={fullLogo} alt='Logo Circles' className='login-logo' />
      <LoginForm />
    </div>
  );
};
