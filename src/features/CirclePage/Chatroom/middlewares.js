import { WS_CONNECT, SEND_MESSAGE, addMessage } from './action';
// on prépare une variable qui contiendra la connexion socket
// on ne peut pas utiliser const sans assigner une valeur
let socket;

const ws = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      // j'ouvre la connexion/canal bidirectionnelle (je rentre dans le bar en tant que client)
      // il faut préciser l'url du server en argument
      socket = window.io('http://localhost:3001/');

      // on se met à écouter les messages du serveurs
      // on écoute l'événement 'server_message' côté client
      socket.on('server_message', (message) => {
        // au moment où on reçoit un message
        // on le stocke dans le state => modifier le state => dispatch d'action
        store.dispatch(addMessage(message));
      });

      // si je veux passer l'action au prochain MW ou au reducer
      // j'utilise la fonction next()
      // next(action);
      break;
    }
    case SEND_MESSAGE: {
      const state = store.getState();
      const { newMessage, surname } = state;

      // const { newMessage, pseudo } = store.getState();

      // on émet un événement côté client lorsqu'on veut ajouter un message
      // cet événement sera écouté côté serveur
      socket.emit('client_message', { surname: surname, content: newMessage });
      break;
    }
    default:
      next(action);
  }
};

export default ws;