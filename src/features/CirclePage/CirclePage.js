import { DetailCircle } from './DetailCircle/DetailCircle';
import Chatroom from './Chatroom/Chatroom';
import { Calendar } from '../Common/Calendar/Calendar';
import { Evenement } from '../Common/Evenements/Evenement';
import { Aside } from './Aside';
import './CirclePage.scss';

export const CirclePage = () => {
    return (
        <div className='container__circle-page'>
            <DetailCircle />
            <Chatroom />
            <div className='container__evt'>
                <Calendar />
                <Evenement />
            </div>
            
            <Aside />
        </div>
    )
}