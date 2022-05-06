import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Messages from './Messages/Messages';
import Form from './Form/Form';
import { wsConnect } from './action';
import './Chatroom.scss';


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
      <Messages />
      <Form />
    </div>
  );
}