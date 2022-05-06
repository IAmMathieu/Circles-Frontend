import { useSelector, useDispatch } from 'react-redux';
import { toggleSettings, changeField, login } from './../action';
// import './style.scss';

export default function Settings() {
  const { email, password } = useSelector((state) => state.auth);
  const classnames = 'settings';
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSettings());
  };

  const handleChange = (value, key) => {
    dispatch(changeField(value, key));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  return (
    <div className={classnames}>
      <button
        type="button"
        className="settings__toggle"
        onClick={handleToggle}
      >
        +
      </button>
      <form className="settings__form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="settings__input"
          placeholder="Email"
          value={email}
          onChange={(event) => handleChange(event.target.value, 'email')}
        />
        <input
          type="password"
          className="settings__input"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => handleChange(event.target.value, 'password')}
        />
        <button
          type="submit"
          className="settings__submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}