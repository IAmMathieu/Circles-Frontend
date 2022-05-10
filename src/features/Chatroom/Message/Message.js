import PropTypes from 'prop-types';
import './Message.scss'

export default function Message({ author, content }) {
  return (
    <li className="message">
      <p className='message__author'>{author}</p>
      <p className='message__content'>{content}</p>
    </li>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

