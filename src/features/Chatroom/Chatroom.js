import './ChatroomStyle.scss';
import Messages from './Messages/Messages';
import ChatForm from './ChatForm/ChatForm';

export default function Chatroom(){
    return (
        <div className="chatroom">
            <Messages />
            <ChatForm />
        </div>

    )
}