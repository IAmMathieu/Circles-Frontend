import Calendar from './Calendar';
import Circle from './Circle';
import NextEvents from './NextEvents';
import LeftPanel from './LeftPanel';
import NewCircle from './NewCircle';
import Carousel from 'react-grid-carousel';
import { useGetUserDashBoardQuery } from './DashboardApi';
import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const { surname, logged, token, user_id } = useSelector(
    (state) => state.auth
  );
  const {
    data: DashData,
    isLoading: loginIsLoading,
    isError: loginIsError,
  } = useGetUserDashBoardQuery(
    {
      token,
      user_id,
    },
    {
      skip: true,
    }
  );

  /**
   * Allow to filter events
   */
  const eventsFilter = async (DashData) => {
    const data = await DashData;
    if (data !== null) {
    }
  };
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
      <Calendar data={DashData} />
      <NextEvents data={DashData} />
      <div className='circlebox' id='circlebox'>
        <Carousel
          cols={5}
          showDots
          responsiveLayout={[
            { breakpoint: 1800, cols: 4 },
            { breakpoint: 1450, cols: 3 },
            { breakpoint: 1100, cols: 2 },
            { breakpoint: 950, cols: 1 },
          ]}
        >
          <Carousel.Item>
            <NewCircle />
          </Carousel.Item>
          {DashData?.map((data) => {
            /**
             * Si les data sont null, on returne rien. Si on récupère bien un event data, on map dessus pour afficher les cercles et leurs données
             */
            if (data !== null) {
              const { name, description, color } = data;
              return (
                <Carousel.Item>
                  <Circle
                    key={data}
                    title={name}
                    description={description}
                    color={color}
                  />
                </Carousel.Item>
              );
            } else {
              return null;
            }
          })}
        </Carousel>
      </div>
    </div>
  );
};
