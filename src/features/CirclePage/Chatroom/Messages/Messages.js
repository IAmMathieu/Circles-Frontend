import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import Message from './../Message/Message';
// import { getMessages } from './../selectors';
import './style.scss';

export default function Messages() {
  // on utilise le hook custom useSelector
  // pour récupérer les infos du state
  // const messages = useSelector((state) => state.messages);
  const messages = useSelector((state) => state.auth);

  // on crée une référence avec useRef
  // elle nous permettra de retrouver notre composant
  // une fois dans le DOM
  const messagesRef = useRef();

  const hiddenElementRef = useRef();

  // à chaque nouveau message, je veux scroller automatiquement
  // en bas de la liste des messages
  useEffect(() => {
    hiddenElementRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ul className="messages" ref={messagesRef}>
      {/* {console.log("Contenu de messages : ", messages)}
      {console.log("Contenu de messages.surname : ", messages.surname)} */}
      {/* {messages.map((message) => ( */}
        <Message
          // key={message.id}
          surname={messages.surname}

        />
      {/* ))} */}
      <div ref={hiddenElementRef} />
    </ul>
  );
}