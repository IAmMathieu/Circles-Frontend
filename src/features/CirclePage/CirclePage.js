import { DetailCircle } from './DetailCircle/DetailCircle';
// import Chatroom from '../Chatroom/Chatroom';
import Calendar from './Calendar/Calendar';
import NextEvents from './NextEvents/NextEvents'
import { Aside } from './Aside/Aside';
import './CirclePage.scss';

export const CirclePage = () => {
    return (
        <div className='container__circle-page'>
            <Aside />
            <div className='container__evt'>
                <Calendar />
                <NextEvents />
            </div>
            {/* <Chatroom /> */}
            <DetailCircle />
        </div>
    )
}