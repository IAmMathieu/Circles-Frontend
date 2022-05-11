
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
      console.log(`🚀 ~ DashData`, DashData);

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