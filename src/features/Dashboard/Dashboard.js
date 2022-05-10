import { useSelector } from 'react-redux';
import Calendar from './Calendar';
import Circle from './Circle';
import NextEvents from './NextEvents';
import LeftPanel from './LeftPanel';
import NewCircle from './NewCircle';
import { useGetUserDashBoardQuery } from './DashboardApi';

export const Dashboard = () => {
  const { surname, logged, token, user_id } = useSelector(
    (state) => state.auth
  );
  const {
    data: DashData,
    isLoading: loginIsLoading,
    isError: loginIsError,
  } = useGetUserDashBoardQuery({
    token,
    user_id,
  });
  console.log(`üöÄ ~ DashData`, DashData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className='dashboard-container'>
      <LeftPanel />
      <Calendar />
      <NextEvents />
      <button
        className='scrollButton'
        onClick={() => {
          document.getElementById('circlebox').scrollLeft += 100;
        }}
      >
        Scroll
      </button>
      <div className='circlebox' id='circlebox'>
        <NewCircle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </div>
    </div>
  );
};
