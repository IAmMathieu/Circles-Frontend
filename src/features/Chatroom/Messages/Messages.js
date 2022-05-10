import './Messages.scss';
import Message from '../Message/Message';

export default function Messages() {
  
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