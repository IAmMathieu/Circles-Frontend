import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { handleChange } from '../../../features/auth/authSlice';
import './Input.scss';

export const Input = ({ name, input, type, error }) => {
  const dispatch = useDispatch();
  return (
    <>
      <TextField
        id='standard-basic'
        label={name}
        variant='standard'
        name={name}
        placeholder={name}
        required
        type={type}
        // error={errors}
        /* On récupère le nom du login (que ce soit donc e-mail ou password)
        Quand on va modifier un champ texte , il récupère automatiquement le nom (email ou password en fonction sur lequel on est) et la valeur. On utilise donc un dispatch pour utiliser une des fonctions de changement du state (ici handleChange) qui va changer le champ que l'on veut modifier et sa valeur automatiquement.
        */
        onChange={(event) =>
          dispatch(
            handleChange({
              name: input,
              payload: event.target.value,
            })
          )
        }
      />
    </>
  );
};
