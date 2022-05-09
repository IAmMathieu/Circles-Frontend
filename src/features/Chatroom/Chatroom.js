import './ChatroomStyle.scss';
import Messages from './Messages/Messages';

export default function Chatroom(){
    return (
        <div className="chatroom">
<Messages />
            <form>
                <input type='text' />
            </form>
        </div>

    )
}