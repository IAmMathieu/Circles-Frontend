import './Messages.scss';
import Message from '../Message/Message';

export default function Messages() {
  return (
    <ul className="messages">
        <Message />
        <Message />
        <Message />
    </ul>
  );
}
