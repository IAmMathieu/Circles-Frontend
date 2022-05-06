import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, changeInputValue } from './../action';
import './style.scss';

export default function Form() {
  // on récupère la méthode "dispatch" du store
  // avec le hook custom "useDispatch"
  // attention, on ne peut utiliser un hook QUE à la racine d'un composant fonction
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // créer une action
    const action = sendMessage();

    // dispatch de l'action
    // on utilise cette méthode en passant l'action en argument
    dispatch(action);

    // traitement de l'action dans le reducer
    // renvoyer un nouveau state
  };

  const inputValue = useSelector((state) => state.newMessage);

  const handleChange = (event) => {
    dispatch(changeInputValue(event.target.value));
    // création d'une action
    // dispatch de l'action + payload (nouvelle value de l'input)
    // traitement de l'action dans le reducer
    // renvoyer un nouveau state
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Saisissez votre message..."
        value={inputValue}
        onChange={handleChange}
      />
      <button className="form__button" type="submit">Envoyer</button>
    </form>
  );
}