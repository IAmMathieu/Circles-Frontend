
import { DetailCircle } from './DetailCircle/DetailCircle';
import { useSelector } from 'react-redux';
// import Chatroom from '../Chatroom/Chatroom';
import Calendar from './Calendar/Calendar';
import NextEvents from './NextEvents/NextEvents'
import { Aside } from './Aside/Aside';
import { useGetUserCircleQuery } from './CircleAPI';

import './CirclePage.scss';

export const CirclePage = () => {
    const { surname, logged, token, user_id } = useSelector(
        (state) => state.auth
      );
      const {
        data: DashData,
        isLoading: loginIsLoading,
        isError: loginIsError,
      } = useGetUserCircleQuery({
        token,
        user_id,
      });

    return (
        <div className='container__circle-page'>
            <div className='container__circle-page__aside'>
                <Aside />
            </div>
    
            <div className='container__evt'>
                <Calendar />
                <NextEvents data={DashData} />
            </div>
            {/* <Chatroom /> */}
            <DetailCircle />
            <div className='container__circle-page__switch'>
                <div className='container__circle_page__switch--chat'>
                    <p>Tchat</p>
                </div>
                <div className='container__circle_page__switch--calendar'>
                    <p>Calendrier</p>
                </div>

            </div>
        </div>
        
    )
}