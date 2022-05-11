import './Messages.scss';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';

export default function Messages() {
  const { messages } = useSelector((state) => state.tchat);
  return (
    <ul className="messages">
      {messages.map((message)=> (
        <Message
        key={message.id}
        {...message}
        />
      ))}
    </ul>
  );
}