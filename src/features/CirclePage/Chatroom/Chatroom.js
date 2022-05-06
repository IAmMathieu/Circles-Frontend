import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Messages from './Messages/Messages';
import Form from './Form/Form';
// import Settings from './Settings/Settings';
import { wsConnect } from './action';
// import './style.scss';


export default function Chatroom() {
  const dispatch = useDispatch();
  // dès que le composant Chatroom est rendu et uniquement au 1e rendu
  useEffect(() => {
    // je veux me connecter au websocket
    // si on veut déclencher l'exécution du socket MW => dispatch d'action
    dispatch(wsConnect());
  }, []);

  return (
    <div className="chatroom">
      <p>Ici vivra le bloc de tchat</p>
      {/* <Settings /> */}
      <Messages />
      <Form />
    </div>
  );
}