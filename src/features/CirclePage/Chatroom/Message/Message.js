import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import classNames from 'classnames';
import { getIsMine } from './../selectors';
// import { useSound } from 'src/hooks';
// import messageSound from 'src/assets/sounds/message.mp3';
// import './style.scss';

export default function Message({ author, content }) {
  // const isMine = useSelector((state) => state.pseudo === author);
  // ici on utilise une closure
  // on passe l'author à getIsMine, qui renverra une fonction
  // cette fonction aura mémorisé l'author et on aura plus qu'à
  // lui passer le state
  const isMine = useSelector(getIsMine(author));

  // on peut passer autant de dépendances qu'on souhaitre au hook custom useSound
  // on utilise le rest parameter pour créer le tableau
//   useSound(messageSound, isMine, author, content);

  return (
    <li 
    // className={classNames('message', { 'message--is-mine': isMine })}
    >
      <p className="message__author">{author}</p>
      <p className="message__content">{content}</p>
    </li>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};