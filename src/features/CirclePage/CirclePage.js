import { DetailCircle } from './DetailCircle/DetailCircle';
// import Chatroom from './Chatroom/Chatroom';
import { Calendar } from '../Common/Calendar/Calendar';
import { Evenement } from '../Common/Evenements/Evenement';
import { Aside } from './Aside';

export const CirclePage = () => {
    return (
        <div>
            <DetailCircle />
            {/* <Chatroom /> */}
            <Calendar />
            <Evenement />
            <Aside />
        </div>
    )
}